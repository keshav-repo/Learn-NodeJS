const { Kafka, Partitioners } = require('kafkajs');
const readline = require('readline');

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const producer = kafka.producer({ createPartitioner: Partitioners.DefaultPartitioner });

const run = async () => {
    await producer.connect();

    const sendMessage = async (message) => {
        if (message.toLowerCase() === 'exit') {
            rl.close();
            await producer.disconnect();
            return;
        }

        await producer.send({
            topic: 'order',
            messages: [
                { value: message },
            ],
        });

        console.log(`Message sent: ${message}`);
        promptForMessage();
    };

    const promptForMessage = () => {
        rl.question('Enter another message (type "exit" to quit):\n', sendMessage);
    };

    promptForMessage();
};

run().catch(console.error);

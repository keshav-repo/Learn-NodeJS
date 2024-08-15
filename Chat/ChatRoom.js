const EventEmitter = require("events");

class ChatRoom extends EventEmitter {
    constructor() {
        super();
        this.users = {};
    }
    join(username) {
        console.log(`${username} has joined the chat.`);
        this.users[username] = (sender, message) => {
            if (sender !== username) {
                console.log(
                    `${username} received a message from ${sender}: ${message}`
                );
            }
        };
        this.emit("join", username);
    }
    sendMessage(sender, recipient, message) {
        console.log(`${sender} to ${recipient}: ${message}`);
        this.emit("message", sender, recipient, message);
    }

    leave(username) {
        console.log(`${username} has left the chat.`);
        this.emit("leave", username);
        delete this.users[username];
    }
}

module.exports = ChatRoom; 

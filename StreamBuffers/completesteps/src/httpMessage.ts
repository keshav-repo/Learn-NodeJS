import { createServer, IncomingMessage, ServerResponse } from 'http';

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    let body = '';

    req.on('data', (chunk: Uint8Array) => {
        console.log(chunk);
        body += chunk.toString();
    });

    req.on('end', () => {
        console.log('Received body:', body);
        res.end('ok');
    });
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});


const http = require('http');

const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 
        message: "Hello from Service 1",
        env_port: PORT 
    }));
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Service 1 running on port ${PORT}`);
});
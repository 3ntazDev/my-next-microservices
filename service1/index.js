const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: "Hello from Service 1 (Port 4000)" }));
});
server.listen(4000, () => console.log('Service 1 running on port 4000'));
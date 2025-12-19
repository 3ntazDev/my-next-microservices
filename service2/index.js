const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: "Hello from Service 2 (Port 5000)" }));
});
server.listen(5000, () => console.log('Service 2 running on port 5000'));
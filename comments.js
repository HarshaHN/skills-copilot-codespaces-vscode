// Create web server
// Create a web server that listens to requests on port 3000. When it receives a request, it will send the following JSON response: { "message": "Hello, world!" }.

const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({ message: 'Hello, world!' }));
}).listen(3000, () => {
    console.log('Server is listening on port 3000');
});
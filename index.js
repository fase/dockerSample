var http = require('http');

const PORT = 8080;

var server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end("<h1>Doin' it Docker style!</h1>");
});

server.listen(PORT, () => { console.log('Listening on port %s', PORT); });


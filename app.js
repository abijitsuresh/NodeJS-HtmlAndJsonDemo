var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('Request was made from: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    var readStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    readStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log("Listening to port 3000!");
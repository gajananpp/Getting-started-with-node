var http = require('http');

http.createServer(function(request,response) {
  response.writeHead(200,{'Content-Type' : 'text/plain'});
  response.write("Hello,World !!!");
  response.end();
}).listen(80,"127.0.0.1");

console.log("Server is listening to http://127.0.0.1:80/",http);

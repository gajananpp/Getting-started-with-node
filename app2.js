var http = require('http');
var fs = require('fs');

http.createServer(function(request,response) {
  fs.readFile("data.txt",function(error,data) {
    response.writeHead(200,{"Content-Type" : "text/plain"});
    //response.write(data);
    response.end(data);
  });
}).listen(80,"127.0.0.1");

console.log("listening to http://127.0.0.1:80/");

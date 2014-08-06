var http = require('http');
var fs = require('fs');

var serverData;

var htmlText = '<html><div style="width: 600px; margin: 200px auto;"><p style="text-align: center; color: #444;">Hello World! - Welcome to Node Server</p></div></html>';
fs.writeFile('index.html', htmlText, function(err){
    if(err){
        throw err;
    }
})

fs.readFile('index.html', function(err, data){
    if(err){
        throw err;
    }
    serverData = data;
});

var server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(serverData);
    res.end();
});
server.listen(8000, function(){
    console.log("server running...");
});

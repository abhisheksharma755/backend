// creating( a server

const fs = require('fs');
const http = require('http');

const file = fs.readFileSync('try.html','utf-8');
const server = http.createServer((req , res)=>{
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(file);
    res.end();
})

server.listen(80,'127.0.0.1',()=>{
    console.log("Listening on port 80 in the local host");
    console.log("click the following link \n " + 'http://127.0.0.1:80')
});
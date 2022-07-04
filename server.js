const fs = require('fs');
const http = require('http');

const home = fs.readFileSync('f7 making our first express app/index.html','utf-8');
const about = fs.readFileSync('f7 making our first express app/about.html','utf-8');
const contact = fs.readFileSync('f7 making our first express app/contact.html','utf-8');
const services = fs.readFileSync('f7 making our first express app/services.html','utf-8');
const error = fs.readFileSync('f7 making our first express app/error.html','utf-8');

const server = http.createServer((req,res)=>{
    res.writeHead(200,"Head man head");
    url = req.url;
    if(url=='/'){
        res.end(home);
    }
    else if (url=='/about'){
        res.end(about);
    }
    else if (url=='/contact'){
        res.end(contact);
    }
    else if (url=='/services'){
        res.end(services);
    }
    else{
        res.end(error);
    }
});

port = 80;
lhost = '127.0.0.1';

server.listen(port,lhost, ()=>{
    console.log(`Server have been started on port ${port} in the localhost \n click the link to follow \n http://${lhost}:${port}`);
});
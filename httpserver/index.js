const http = require("http");
const server = http.createServer((req,res) => {
   // console.log(req.url);
   if(req.url ==='/'){
    res.end("Hello ");
   }else if(req.url ==='/about'){
    res.end("Hello from the AboutUs sides");
   }else if(req.url ==='/contact'){
    res.end("Hello from the ContactUs sides");
    res.end();
   }else{
    res.writeHead(404, {"Content-type":"text/html"});
    res.end("<h1>404 error pages</h1>");
   }
});

server.listen(8000,"127.0.0.1", () => {
    console.log('listening to the port no 8000')
});
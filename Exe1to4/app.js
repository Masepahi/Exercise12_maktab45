const http = require('http');
const fs = require('fs');





http.createServer(function (req, res){
    
    if (req.url === "/" && req.method === "GET") {
        console.log(`${req.url}`);
        res.write("<a href=/json>Hello World</a>");
        res.end()
    } else if (req.url === "/test"&& req.method === "GET") {
        console.log(`${req.url}`);
        res.write("Testing");
        res.end()
    } else if (req.url === "/json" && req.method === "GET") {
        console.log(`${req.url}`);
        res.setHeader("Content-Type", "application/json");
        fs.readFile("./data.json", function (err, success){
            res.write(success)
            res.end();
        })
    } else if (req.url === "/about" && req.method === "GET") {
        console.log(`${req.url}`);
        res.write("About Me")
        res.end();
    } else if (req.url === "/contact" && req.method === "GET") {
        console.log(`${req.url}`);
        res.write("Contact Us")
        res.end();
    } else {
        res.write("Not Found");
        res.end();
    }
    
}).listen(5005);

console.log("server Started");



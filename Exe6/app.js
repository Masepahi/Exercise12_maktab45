const http = require('http');
const fs = require('fs');


http.createServer(function (req, res){
    if (req.url === "/" && req.method === "GET") {
        fs.readFile("./index.html", function (err, data) {
            res.write(data);
            res.end();
        })
    } else if (req.url === "/1-image.jpg" && req.method === "GET"){
        fs.readFile("./1-image.jpg", function (err, data) {
            res.write(data);
            res.end();
        })
    } else if (req.url === "/style.css" && req.method === "GET") {
        fs.readFile("./style.css", function (err, data) {
            res.write(data);
            res.end();
        })
    } else if (req.url === "/main.js" && req.method === "GET") {
        fs.readFile("./main.js", function (err, data){
            res.write(data);
            res.end()
        })
    }
}).listen(2000)

console.log("server Started");
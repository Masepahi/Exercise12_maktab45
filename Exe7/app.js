
const http = require('http');
const fs = require('fs');


const server = http.createServer(function(req, res) {
  if (req.url = "/" && req.method === 'GET') {
    fs.readFile("./index.html", function(err, data){
      res.write(data);
      res.end
    })
  } else if (req.url === "/style.css" && req.method === "GET") {
    fs.readFile("./style.css", function(err, data){
      res.write(data);
      res.end()
    })
  } else if (req.url === "/main.js" && req.method === "GET") {
    fs.readFile("./main.js", function(err, data){
      res.write(data);
      res.end()
    })
  } else if (req.url === '/post' && req.method === 'POST') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );

   
    
  }
});


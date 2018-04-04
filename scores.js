const jsonBody = require("body/json");
var scores = [{name: "Edwin", score: 50}, {name: "David", score: 39}];

// const textBody = require("body");

const http = require('http');

const hostname = "";
const port = 3000;

const server = http.createServer((req, res) => {
    var body;
    jsonBody (req, res, (err, body) => {
    if (req.method === "GET") {
        if(req.url !== "/scores") {
            res.statusCode = 404;
        } else if (req.url === "/scores") {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/javascript');
            body = scores;
        }
    }
    if (req.method === "POST") {
        console.log(body);
        res.statusCode = 201;
        scores.push(body);
        // res.setHeader('Content-Type', 'application/javascript');
    }
        body = JSON.stringify(scores);
        res.end(body);
});
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
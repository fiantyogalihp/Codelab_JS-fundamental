/* eslint-disable no-console */
const http = require('http');
// import http from "http";

const requestListener = (req, res) => {
  res.setHeader('Content-Type', 'text/html');

  const { method, url } = req;

  const myName = 'pelanggan';

  if (url === '/') {
    //
  } else if (url === '/about') {
    //
  } else {
    res.end(`<header><h1>Hi! ${myName}!</h1></header>`);
  }

  // if (url) {
  //   if (method === "GET") res.setHeader("Content-Type", "application/json");
  //   if (method === "POST") {
  //     let body = [];

  //     req.on("data", (chunk) => {
  //       body.push(chunk);
  //     });

  //     req.on("end", () => {
  //       body = Buffer.concat(body).toString();
  //       const { name } = JSON.parse(body);
  //       res.end(`<h1>hai! ${name}</h1>`);
  //     });
  //   }
  // }

  // if (url === "/about") {
  //   if (method === "GET") res.setHeader("Content-Type", "application/json");
  //   if (method === "POST") res.setHeader("Content-Type", "application/json");
  // }
};

const server = http.createServer(requestListener);

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`Server listening at http://${host}:${port}`);
});

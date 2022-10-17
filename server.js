const http = require("http");
// import { http } from "http";

// * req = request, res = response
const requestListener = (req, res) => {
  // * Logika
  // const server = http.createServer((req, res) => {
  //   res.writeHead(200, { 'Content-Type': 'text/plain' });
  //   res.end('Hello World!');
  // });

  res.setHeader("Content-Type", "application/json");
  res.setHeader("X-Powered-By", "NodeJs");
  // res.setHeader("Content-Type", "text/html");
  // res.statusCode = 200;

  // res.end(`<h1>Halo Cuy HTTP Server!</h1>`);
  const { method, url } = req;

  if (url === "/") {
    // TODO 2: logika respons bila url bernilai '/'
    if (method === "GET") {
      res.statusCode = 200;
      // res.end(
      //   JSON.stringify({
      //     status: 200,
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       status: 200,
      //     }),
      //   })
      // );
      res.end(
        JSON.stringify({
          message: `ini adalah homepage`,
        })
      );
    }
    if (method === "POST") {
      res.statusCode = 400;
      res.end(
        JSON.stringify({
          message: `Halaman tidak dapat diakses dengan '${method}' request`,
        })
      );
    }
  } else if (url === "/about") {
    // TODO 3: logika respons bila url bernilai '/about'
    if (method === "GET") {
      res.statusCode = 200;
      res.end(
        JSON.stringify({
          message: `Halo! Ini adalah halaman about`,
        })
      );
    }
    if (method === "POST") {
      let body = [];

      req.on("data", (chunk) => {
        body.push(chunk);
      });

      req.on("end", () => {
        try {
          body = Buffer.concat(body).toString();
          const { name } = JSON.parse(body);

          res.statusCode = 200;
          res.end(
            JSON.stringify({
              message: `Halo, ${name}! Ini adalah halaman about`,
            })
          );
        } catch (e) {}
      });
    }
    if (method === "DELETE") {
      res.statusCode = 400;
      res.end(
        JSON.stringify({
          message: `Halaman tidak dapat diakses dengan '${method}' request`,
        })
      );
    }
  } else {
    // TODO 1: logika respons bila url bukan '/' atau '/about'
    res.statusCode = 404;
    res.end(
      JSON.stringify({
        message: `Page not Found!`,
      })
    );
    // res.end(`<header><h1>Page not Found!</h1></header>`);
  }

  /**
  if (method === "GET") res.end(`<h1>Hello!</h`);
  if (method === "POST") {
    let body = [];

    // * menjadikan data sementara dalam array
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      // * mengubah data buffer(sementara) menjadi data sebenarnya dalam bentuk string
      body = Buffer.concat(body).toString();

      // * jadikan JS object menjadi JSON string untuk mengolah data 'name'
      const { name } = JSON.parse(body);

      // * body menjadi data siap konsumsi ketika event Stream 'end' telah dipanggil(dibangkikan)
      // ! jadi, server tidak akan mengirimkan response bila proses stream belum selesai.
      res.end(`<h1>Hai! ${name}!</h`);
    });
  }
  */

  // if (method === "PUT") res.end(`<h1>Bonjour!</h`);
  // if (method === "DELETE") res.end(`<h1>Salam!</h`);
};

const server = http.createServer(requestListener);

const port = 3200;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server listening at http://${host}:${port}`);
});

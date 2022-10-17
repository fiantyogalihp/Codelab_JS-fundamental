const fs = require("fs");

const readableStream = fs.createReadStream("./articles.txt", {
  highWaterMark: 10, // * (Buffer) merupakan memory sementara yg digunakan stream untuk menyimpan data
});

readableStream.on("readable", () => {
  try {
    process.stdout.write(`${readableStream.read()}`);
  } catch (error) {
    // ! catch the error when the chunk cannot be read.
  }
});

readableStream.on("end", () => {
  console.log("Done");
});

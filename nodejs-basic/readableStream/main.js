/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 * Tulis ulang teks dengan menggunakan teknik writable stream pada berkas output.txt. Untuk tiap bagian teks yang dibaca melalui readable stream, pisahkan dengan baris baru (‘\n’).
 */

const fs = require("fs");
const { chunk } = require("lodash");
const { Readable, Writeable } = require("stream");

const readableStream = fs.createReadStream("./input.txt", {
  highWaterMark: 15,
});

const writableStream = fs.createWriteStream("./output.txt", {
  highWaterMark: 20,
});

readableStream.on("data", (chunk) => {
  console.log(`Read chunk: ${chunk}`);
  writableStream.write(chunk + "\n", (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Chunk written to output.txt");
    }
  });
});

readableStream.on("end", () => {
  console.log("Done reading input.txt");
  writableStream.end(() => {
    console.log("Done writing to output.txt");
  });
});

// belajar filesystem

// const fs = require("fs"); // Uncomment and use the fs module

// const fileReadCallback = (error, data) => {
//   if (error) {
//     console.log("Error reading file:", error);
//     return;
//   }
//   console.log(data);
// };

// fs.readFile("file.txt", "utf-8", fileReadCallback);

// Latihan filesystem
// const fs = require("fs");
// fs.readFile("notes.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log("Error reading file:", error);
//     return;
//   }
//   console.log(data); // Display the content of notes.txt
// });

const fs = require("fs");
const filePath = "notes.txt";

const data = fs.readFileSync(filePath, "utf-8");
console.log(data);

const initialMemoryUsage = process.memoryUsage();
const yourName = "Ilham Arifin";
const environment = process.env.NODE_ENV || "development";

for (let i = 0; i <= 10000; i++) {
  // console.log(`Hello ${yourName}, this is your ${i} th message`)
}

const currentMemoryUsage = process.memoryUsage();

console.log(`Hello ${yourName}`);
console.log(`Mode Environment: ${environment}`);
console.log(
  `Penggunaan memori dari ${initialMemoryUsage.rss} naik ke ${currentMemoryUsage.rss}`
);

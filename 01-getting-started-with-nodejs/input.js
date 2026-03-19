const readline = require("readline");
const prompt = require("prompt-sync")();

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// Input using readline:
// rl.question("What is your name?", (name) => {
//   console.log(`Hi ${name}`);
//   rl.close();
// });

// Input using prompt package:
const name = prompt("What is your name?");
console.log(`Hii ${name}`);

// const x = 1;
// const y = 2;
// console.log(x, y);

// Format Specifier and Format Phrases:
// %s Format variable to string -> Variable to String
// $d Format variable to string -> Number to String
// %i Format variable to string -> Integer to String
// %o Format variable to string -> Object to String

// console.log("I am %s and my age is %d", "Abhishek", 25);

// Console Methods:
// console.clear();
// console.count("I am abhishek");
// console.count("I am abhishek");
// console.count("I am jaiswar");
// console.countReset("I am abhishek")
// console.count("I am abhishek")

// const function1 = () => console.trace();
// const function2 = () => function1();
// function2();

// const sum = () => console.log(`The sum of 2 and 3 is: ${2 + 3}`);
// const multiply = () =>
//   console.log(`The multiplication of 2 and 3 is: ${2 * 3}`);

// const measureTime = () => {
//   console.time("sum()");
//   sum();
//   console.timeEnd("sum()");
//   console.time("multiply()");
//   multiply();
//   console.timeEnd("multiply()");
// };
// measureTime();

// Create a  progress bar using javascript in node js:
// const ProgressBar = require("progress");

// const bar = new ProgressBar("downloading [:bar] :rate/bps :percent :etas", {
//   total: 20,
// });

// const timer = setInterval(() => {
//   bar.tick();
//   if (bar.complete) {
//     clearInterval(timer);
//   }
// }, 100);

// Use chalk package to add colors to text:
const { default: chalk } = require("chalk");
console.log(chalk.blue("This is node js tutorial"));

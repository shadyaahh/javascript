//condition ? value-if-true : value-if-false;
const prompt = require('prompt-sync')();

let age = prompt("enter the age: ");
// let age =15;
let result =(age >=18) ? "adult" : "minor";
console.log(result);

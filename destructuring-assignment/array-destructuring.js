const numbers = [10, 20, 30, 40];

//basic destructuring
const [a, b] = numbers;
console.log(a);
console.log(b);

//destructring assigment is a js features that allows you to unpack values from arrays or properties from object in to superate varabile

//skipping values
const [, , c] = numbers;
console.log(c);

//using rest operators
const [x,...rest]= numbers;
console.log("x is:",x);
console.log(rest);



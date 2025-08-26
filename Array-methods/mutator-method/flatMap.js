//Maps each elements & then flattens the result one level deep

let arr = [1, 2, 3];
let result = arr.flatMap(X => [X, X * 2]);
console.log(result);
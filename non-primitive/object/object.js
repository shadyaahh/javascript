// Object is a collection of key-value pairs/
//used to multiple value in a single vaeable & the value

const person ={
    name: 'shadyy',
    age: 21,
    isStudent: true
}
console.log(person.name);
console.log(person["age"]);

//add or modify datas
person.city="new york";
person.age=21;

delete person.city;
console.log(person);

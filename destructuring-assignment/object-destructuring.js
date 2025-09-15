const person ={name: "anju", age : 94, country:"africa"}
//basic destructring
const {name,age}=person;
console.log(name);
console.log(age);

//rename variables
const{country:nation}=person;
console.log("nation:",nation);

//desfault value 
const {gender ='mal '}=person;
console.log("gender:",gender);

console.log("person..",person);


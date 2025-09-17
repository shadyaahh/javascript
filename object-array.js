const students = [
    { name: "shadyyy", age: 20, grade: "A+" },
    { name: "safna", age: 22, grade: "A" },
    { name: "nitha", age: 21, grade: "B+" }

]
//accessing data
console.log(students[0].name);
console.log(students[1].grade);

//looping through object array
students.forEach(stdnt => {
    console.log(`${stdnt.name} is ${stdnt.age}years old.`);

})
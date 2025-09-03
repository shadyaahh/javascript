//you can stroe function inside object- these are called

const car = {
    brand:"toyota",
    start: function(){
        console.log("car started");
        
    }
}

car.start();

//"this" keyword-  this refres the object its self.(used)
const person ={
    name:"shadiya",
    age:20,
    greet:function(){
        console.log(`hello, my name is ${this.name}`)
        
    }
}
person.greet();
//base

class Animal{
    constructor(name){
        this.name =name;
    }
    speak(){//method
        console.log(`${this.name}make a sound`);
        
    }
}

//derived class inherits from animal
class Dog extends Animal{
    constructor(name,breed){
        super(name);//call the parantclass constructrue
        this.breed = breed;
    }
    //override speak method (polymorphisum)
    speak(){
        console.log(`${this.name} barks`);
        
    }
}

const dog = new Dog("rex", "Germen shepherd");
dog.speak();
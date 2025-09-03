//is a way to define function inside an expression & assign it to  a var


//key features
//1. anonymous or named
//2. not hoisted
//3. can be used as argument
//4. can be assigned to variable/object
const sayHELLO = function () {
    console.log("HELLO!");

}

sayHELLO();

const match = {
    add: function(a, b){//parameter
        return a+b;
    }
}
console.log(match.add(5, 3));//argyment

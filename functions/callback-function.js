//function get are passed as argument to other function
//why are callblack function?
//asynchronous operation
//avoid blocking code execution

const { useCallback } = require("react");

 
function greetUser(name){
    console.log(`hello, ${name}`);

    
}
//this function takes another function (callblack) as fuction
function getUserInput(Callback){
       const Name = "nazamol";
       Callback(Name);
    }
//getusedinput pass greetuser as a callback
 getUserInput(greetUser);    
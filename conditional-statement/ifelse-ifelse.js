const prompt = require ('prompt-sync')();
let temperature = prompt("enter the temperature: ");

let score = 85;

if(score>=90){
    console.log("grade:A");
    
}else if (score>=80){
    console.log("grade:B");
    
}else if (score>=70){
    console.log("grade:c");
}else{
    console.log("grade:e");

}


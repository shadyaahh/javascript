function greet(firstname,lastname,...titles){
    console.log(`name:${firstname}${lastname}`);
    console.log(`Titles:${titles.join(',')}`);
    
    
}
greet("shadyah","T", "BCA" ,"software engineer ", "author");
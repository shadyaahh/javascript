function numbers(...oddoreve) {
  oddoreve.forEach(num => {
    if (num % 2 === 0) {
      console.log(`${num} is Even`);
    } else {
      console.log(`${num} is Odd`);
    }
  });
}

numbers(2,4,6,1,3,5)
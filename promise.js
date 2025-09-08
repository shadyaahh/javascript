//const promise = new PromiseRejectionEvent((resolve,reject)=>{
//asynchronous operactioin
//})

//resolve called when the function is successful
//reject called when the function is fallure
//.then  = excute the promise is resolve 
//.catch = execute oif the promis is resolved or rejected
//create promise object

let myPromise = new Promise((resolve, reject) => {
    let success = false;

    setTimeout(() => {
        if (success) {
            resolve('promise resolved successfully!')
        } else {
            reject('promise rejected')
        }
    }, 2000)
})

myPromise
    .then(result => console.log(result))//then is the promise is desolved
    .catch(error => console.log(error))//then is the  promise is rejected
    .finally(() => console.log("promise exicution finished!"))//then is the always excuted
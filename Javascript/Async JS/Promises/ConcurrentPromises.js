//Todo: create 3 promises, then use the Promise.all to wait for all of them to complete.

//Create 3 promises
let promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Promise 1");
        console.log("Just resolved promise 1");
    }, 1000);
});

let promise2 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve("Promise 2");
        console.log("Just resolved promise 2");
	}, 1000);
});

let promise3 = new Promise(function (resolve, reject) {
	setTimeout(function () {
    if(!true){
        resolve("Promise 3 fulfilled");
    }
    else {
        reject("Promise 3 error");
    }
	}, 1000);
});


//Use Promise.all to wait for all of them to complete.

//Promise.all will return 1 of 2 things:
//1. An array of all the resolved values 
//2. A a single rejected promise

Promise.all([promise1, promise2, promise3])
  .then(function (values) {
  values.forEach((value) => {
      console.log(value);
    });
  })
  .catch(function (error) {
  console.log(error);
  });

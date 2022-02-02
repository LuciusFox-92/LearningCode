//Todo: create 3 promises, then use the Promise.all to wait for all of them to complete.

//Create 3 promises
let promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Promise 1");
    }, 1000);
});

let promise2 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve("Promise 2");
	}, 1000);
});

let promise3 = new Promise(function (resolve, reject) {
	setTimeout(function () {
    if(!true){
        resolve("Promise 3");
    }
    else {
        reject("Promise 3 error");
    }
	}, 1000);
});


//Use Promise.all to wait for all of them to complete.
Promise.all([promise1, promise2, promise3])
  .then(function (values) {
  console.log(values);
  })
  .catch(function (error) {
  console.log(error);
  });

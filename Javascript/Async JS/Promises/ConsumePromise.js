const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

const checkInventory = (order) => {
  //Creating a promise
  return new Promise((resolve, reject) => { //callback function, or executor function
    setTimeout(() => {
      let inStock = order.every(item => inventory[item[0]] >= item[1]);
      if (inStock) {
        resolve(`Thank you. Your order was successful.`);
      } else {
        reject(`We're sorry. Your order could not be completed because some items are sold out.`);
      }
    }, 1000);
  })
};


const order = [
	["sunglasses", 1],
	["bags", 2],
];

//Create a success handler for the promise
const handleSuccess = (resolve) => {
  console.log(resolve);
}

//Create a failure handler for the promise
const handleFailure = (reject) => {
  console.log(reject);
}

//Consume the promise
checkInventory(order).then(handleSuccess, handleFailure);
//Create a shopping item that the user can add to their cart
let shoppingItem = {
    name: "Shoes",
    price: 100,
    quantity: 100
}


//Create an executor function that will be called when the promise is created
let executor = (resolve, reject) => {
    //Create a setTimeout function that will resolve the promise after 3 seconds
    setTimeout(() => {
        //If the shopping item is in stock, resolve the promise
        if (shoppingItem.quantity > 0) {
            resolve(shoppingItem);
        } else {
            //If the shopping item is out of stock, reject the promise
            reject(`${shoppingItem.name} is out of stock`);
        }
    }, 3000);
}


//Create a function that will return a promise using the executor function
const orderShoppingItem = () => {
    return new Promise(executor);
}

let orderShoppingItemPromise = orderShoppingItem();


//print the shopping item to the console
orderShoppingItemPromise.then((item) => {
    console.log(`${item.name} is in stock, your item will be shipped in 3 seconds`);
    console.log(item);
}).catch((error) => {
    console.log(error);
});



//simple example creating a function to handle the success and failure of a promise
const handleSuccess = (data) => {
    console.log(`Success: ${data}`);
};

const handleError = (error) => {
    console.log(`Error: ${error}`);
};

orderShoppingItemPromise
  .then(handleSuccess)
  .catch(handleError);
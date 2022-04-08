const { checkInventory, processPayment, shipOrder } = require("./libCodecademy.js");

const order = {
	items: [
		["sunglasses", 1],
		["bags", 2],
	],
	giftcardBalance: 79.82,
};

checkInventory(order)
	.then((resolvedValueArray) => {
		// Write the correct return statement here:
		return processPayment(resolvedValueArray);
	})
	.then((resolvedValueArray) => {
		// Write the correct return statement here:
		return shipOrder(resolvedValueArray);
	})
	.then((successMessage) => {
		console.log(successMessage);
	})
	.catch((errorMessage) => {
		console.log(errorMessage);
	});


	//Common errors when chaining promises are:
	//1. Promise is not returned from a function
	//2. Promise is settled before it is returned from a function

	//Solution:
	//Make sure to return the promise from the function that is being chained to the next function.

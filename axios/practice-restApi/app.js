const axios = require("axios");

console.log(process.argv);
//Get input from console and store it in a variable
const input = process.argv[2];

let payload = {
    "qrcode_generatedCode": input
};

async function putData() {

	try {
		// send a post request to the server
		let response = await axios.post(
			"http://localhost:3308/api/qrcode/",
			payload
		);
		// print the stringified json response
    console.log(response.data);
	} catch (error) {
		//show an alert
		console.error(`error: ${error}`);
	}
}

async function getData() {
  // Get all the qr codes from the server
  try {
		let response = await axios.get("http://localhost:3308/api/qrcode/");

		/*
    * Format the response data
    {
    qrcode_id: 13,
    qrcode_generatedCode: 'node1',
    refugee_id: null,
    qrcode_created: '2022-04-20T01:09:30.000Z',
    qrcode_arrivalTime: '2022-04-20T01:09:30.000Z'
    }
    */

    let data = response.data;

    // // Order the data in the array by the arrival time
    // data.sort(function(a, b) {
    //   return new Date(a.qrcode_arrivalTime) - new Date(b.qrcode_arrivalTime);
    // });

    // Order the data in the array by the the qrcode_id
    data.sort(function(a, b) {
      return a.qrcode_id - b.qrcode_id;
    });


    // Print the data
    console.log(data);
	} catch (error) {
    //show an alert
    console.error(`error: ${error}`);
  }
}


//call the function
// putData();
getData();
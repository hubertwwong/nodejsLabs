let request = require('superagent');

// let foo = new Promise(function (resolve, reject) {
// 	request
// 		.get('www.google.com')
// 		//.then(function(err, res){
// 			// Calling the end function will send the request
// 			//console.log(res.text.length)
// 		//});
// 	resolve(true);
// });

function getFormattedURI() {
	return new Promise(function(resolve, reject) {
		request.get(uri).end((err, res) => {
			//(using superagent request) do stuff with res and return parsed uri
			resolve(res);
		});
	});
}

getFormattedURI('www.google.com')
	.then(function(res) {
		console.log("aaa");
		resolve(true);
	}).catch(function(err) {
		console.log("bbb");
	})

//https://visionmedia.github.io/superagent/docs/test.html
//http://stackoverflow.com/questions/37819900/how-to-wait-for-a-response-before-continuing-in-the-program-nodejs-with-elasti
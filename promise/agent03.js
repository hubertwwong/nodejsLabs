let request = require('superagent');
let Promise = require('bluebird');

let urlLen=0

let getFormattedURI = function(uri) {
	return new Promise(function(resolve, reject) {
		request.get(uri).end((err, res) => {
			//(using superagent request) do stuff with res and return parsed uri
			console.log(res.text.length);
			console.log(res.status);
			urlLen++
			resolve(res);
		});
	});
}

let proms = [
		getFormattedURI("www.google.com"),
		getFormattedURI("www.yahoo.com")
	];
Promise.all(proms).then(function() {
  console.log("all the files were created", urlLen);
});

//https://visionmedia.github.io/superagent/docs/test.html
//http://stackoverflow.com/questions/37819900/how-to-wait-for-a-response-before-continuing-in-the-program-nodejs-with-elasti
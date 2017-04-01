let request = require('superagent');

request
  .get('www.google.com')
	.end(function(err, res){
    // Calling the end function will send the request
		console.log(res.text.length)
  });
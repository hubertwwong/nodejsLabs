let Promise = require('bluebird');

var initServer = new Promise(function (resolve, reject) {
  console.log('running');
  resolve(true);
})
.then(function () {
  console.log("then");
});

/*

https://github.com/petkaantonov/bluebird/issues/775
https://gist.github.com/rainabba/b83eed7f6317e5e7d945

*/
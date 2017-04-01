let Promise = require('bluebird');
let join = Promise.join;

let foo = new Promise(function (resolve, reject) {
  console.log('foo');
  resolve(true);
});

let bar = new Promise(function (resolve, reject) {
  console.log('bar');
  resolve(true);
})

// foo
// .then(function () {
//   console.log("then");
// });

let proms = [foo, bar];
Promise.all(proms).then(function() {
  console.log("all the files were created");
});

/*

http://bluebirdjs.com/docs/api/promise.all.html

 */
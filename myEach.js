// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ForEach
 // CODE INSIDE HERE //

var car = ["Toyota", "Honda", "Lexus"];
  function myEach(arr, callback) {
  	for (i = 0; i < arr.length; i++) {
  		callback(arr[i], i, arr);
  	}
  	console.log("this is my forEach");
  }

 /*function callback (thing) {
 	console.log(things);
 } 
/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/






// export this function (you can ignore this for now)
module.exports = myEach;

// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

function myMap(arr, callback) {
var transformedArray = [];

	for(var i = 0; i < arr.length; i++){
	var transformedValue = callback(arr[i], i, arr);
	transformedArray.push(transformedValue);
	} 

console.log(transformedArray);
return transformedArray;  
}

var originalArray = [1, 2, 3, 4];
function addOne(number) {
	return 1 + number;
}

myMap(originalArray, addOne);
/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myMap;
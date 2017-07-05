// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback) {

//  CODE INSIDE HERE   //
// var accumulator = 0;
// for (var i = 0; i < arr.length; i++) {
// 	accumulator += callback(arr[i], i, arr);
// 	console.log(accumulator);

// 	if (typeof(initialValue) == "undefined"){
// 		i++;
// 		previousValue = arr[0];
// 	} else {
// 	previousValue = initialValue;
// 	}
// }

// return accumulator;

// }

previousValue = arr[0];
	for(var i=1; i< arr.length; i++) {
	previousValue = callback(previousValue, arr[i], i, arr);
	}
return previousValue;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;

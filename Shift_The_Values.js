// 2. Shift the Values

// Create a variable that takes an array 
// Create another variable for new array
// Iterate through the loop and shifts each number by one to the front
// Return the value

var x = [2, 1, 6, 4, -7];
var y = new Array;
for(var i = x.length-1; i >= 0; i--){
    y.push(x[i]);
}
console.log(y);


//  var         value    
//  x       [2,1,6,4,-7],
//  y       [-7],[-7,4],[-7,4,6,],[-7,4,6,1],[-7,4,6,1,2]
//  i        4-> 3-> 2-> 1-> 0 -> -1
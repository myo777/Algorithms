
// Create a variable called sortedArr which sorts it from the lowest to the highest value.
// FirstNum is equal to the first number and lastNum is equal to the second number.
// Using the Arithmetic Progression summing formula let sum equal (lastNum - firstNum + 1) * (firstNum + lastNum) / 2.
// return sum.

function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);

  return (max + min) * (max - min + 1) / 2;
}

console.log(sumAll([4, 1]));



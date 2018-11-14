//1. Addition
// Create a variable
// Iterate through the loop and add all the numbers between
// 200 and 2700 that that are divisible by 3 or 5, but not both 3 and 5.
// Return value;
var sum = 0
  for(var i = 200; i <= 2700; i++){
	if ((i % 3 ==0 || i % 5 ==0) && (i % 3 !=0||i % 5 !=0)){
		sum = sum + i;
	}

}
console.log(sum);

// 3.FizzBuzz
// Create an algorithm that inserts the numbers from 1 to 135 into an array,
// While replacing the values that are divisible by 3 with the word "Fizz",
//  the numbers that are divisible by 5 with the word "Buzz", and the numbers
// that are divisible with 3 and 5 with the word "FizzBuzz". 
// Return Value 
var x = [];
	for(var i = 1; i <= 135; i++){
		if (i % 3 == 0 && i % 5 == 0){
			x.push(' FizzBuzz ');
		}
		else if (i % 3 ==0){
			x.push(' Fizz ');
		}
		else if (i % 5 ==0){
			x.push(' Buzz ');
		}
		else {
			x.push(i);
		}

	}
	console.log(x);

// var       value
// x      1 | 2| "Fizz"| 4|"Buzz"|"Fizz"| 7| 8| 9| 0|
//          11|12|13|14|"FizzBuzz"| 16|...135
// i      0->1->2->3->4->5->6->7->8->.....136
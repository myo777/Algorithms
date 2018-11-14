// Create a variable to keep record of the current and previous numbers along with the result that will be returned.
// Use a while loop to make sure  do not go over the number given as parameter.
// Use the modulo operand to check if the current number is odd or even. If it is even, add it to the result.
// Complete the Fibonacci circle by rotating getting the next number and swapping values after.
// Return the result.

function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}
console.log(sumFibs(4));


// var           value
// num         4
// prevNumber  0,1,2,3
// currNumber  1,1,3,5
// result      0,1,2,5
// return      5
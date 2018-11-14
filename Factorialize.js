//Declare a function factorialize(n) 
// that takes an integer n as input
// Check integer n  if n is equal to 0 return 1 
// Else n multiply fatorial (n -1)
// returns the factorial of the provided integer.


function factorial(n) {
    if(n == 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(6));// return 720
console.log(factorial(10));// return 3628800
console.log(factorial(20));// return 2432902008176640000;


// n [6] = 120 * 6 = 720

// n [5] = 24 * 5 = 120

// n [4] = 6 * 4 = 24

// n [3] = 2 * 3 = 6

// n[2] = 1 * 2 = 2

// n[1] = 1*1 = 1
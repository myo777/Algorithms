*****fibonachi sequence

function FibonacciSQ(n) { 
    if(n <= 0)
    return 0;
var pre1 = 1;
var pre2 = 1;
var curr = 0;
var i =2 ;
    if(n > 0 && n < 3)
       return 1;

while (i<n) {
  
    curr = pre1 + pre2;
    pre1 = pre2;
    pre2 = curr;
    i++;
}return curr;
}
console.log(FibonacciSQ(7));
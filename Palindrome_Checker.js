******* 3.palindDrome

// Make a function that takes a string as an argument 
// define a variable of reverse string compare the reverse string with the 
// with the input string
// if they are identically return true
// other wise return false


function palindrom(str){
  var reverseStr = "";
  for (var i=str.length - 1; i >=0 ; i--){
    reverseStr = reverseStr + str[i];
  }
  if(reverseStr ===str){
    return true;
  }
  else  
  {
    return false;
  }
}
console.log(palindrom("racecar"));



// var         value

// str         "racecar"
// reverseStr  "","r","ra","rac","race","racec","raceca","racecar"
// i           6,5,4,3,2,1,0,-1
//return       true
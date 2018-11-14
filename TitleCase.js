****Title Case

// Create a function that's take a string as an argument
// Transform the str into a arr;
// loop through the arr
// change all the words to lower case
// change only the first letter to upper case
// return the output
function titleCase(str) 
{
  var newstr = str.toLowerCase().split(" ");
  for ( var i = 0; i < newstr.length; i++) 
  {
    var Char = newstr[i].charAt(0);
    newstr[i] = newstr[i].replace(Char, Char.toUpperCase());
  }
  return newstr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt")); 





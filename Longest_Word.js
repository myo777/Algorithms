*****longest word

// Make a function that take a string as an argument
// split the string into an array where each element will hold one word.
// Have a index location tracker that will track the location of 
// the longest word found so far
// once the entire array has been check log the longest words length.
// return findlongestWord


function findlongestWord(str){
  var arr = str.split(' ');
  var longIndex = 0;
  for (var i = 1; i < arr.length; i++){
    if (arr[i].length > arr[longIndex].length){
           longIndex = i;
    }
  }
  return console.log(arr[longIndex]);
}
console.log (findlongestWord(" The quick brown fox jumped over the lazy dog"));

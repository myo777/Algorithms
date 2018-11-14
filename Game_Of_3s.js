*******GAME OF 3

// Make a function that takes an integer as an argument
// This integer has to be able to be devided by 3
// if this is not possible check 
// if it is devisable by 3 after you subtract 1 from it.
// if it still not possible then add 1 and check if it is divisible 3
// one of these should be possible and that one should take 
// the value of the argument at that time.
// each time the value shoul be logged with an indicator
// of adding or subtracting one if needed
// once the arguments becomes 1 the function should stop


function gameofThrees(num){
  for (var i = num; i >= num ; i-- )
  {
    if (num === 1){
      return console.log(1 + "done");
    }
    
    else if(num % 3 == 0){
      console.log(num + ' 0');
      num /= 3;
    }
    else if((num - 1 )% 3 == 0)
    {
      console.log(num + ' -1');
      num = (num - 1) / 3;
    }
    else if((num + 1) % 3 == 0)
    {
      console.log(num + ' 1');
      num = (num + 1) / 3;
    }
  }
}
gameofThrees(100);

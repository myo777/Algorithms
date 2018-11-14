***** Largest Number

function largestNumber(arr)
{
  var max = [];
  for (var i=0; i<arr.length; i++)
  {
    var temp = arr[i][0];
    for (var j=0; j<arr[i].length; j++)
    {
      var curr = arr[i][j];
      if(curr >= temp){
        temp = curr;
    
    }
  }
   max.push(temp);
    }
    return max;
  }
console.log (largestNumber([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
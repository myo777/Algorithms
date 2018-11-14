*******2.SELECTION SORT



// Make a function that takes an array of integer as an argument
// iterate through the loop and compare with 
//the first num and the minimal value of in the array
// when found the minimal elemnt swap it the first element .
// keep find the smallest number and swap it 
//until the end of array with first element
// then repeat again through the loop and find the smallest
// number and swap keep do it until to get the sorted array.
// return sorted array;



function selectSort(arr)
{
  var minindex,temp;
  
  for(var i = 0; i < arr.length - 1; i++)
  {
       
       minindex = i;
      for(var j=i + 1 ; j < arr.length ; j++)
      {
        if ( arr[j] < arr[minindex])
        {
          minindex = j;
        }
      }
      temp = arr[i];
      arr[i] = arr[minindex];
      arr [minindex] = temp;

  }
  return arr;
}
console.log(selectSort([70,5,30,25,100]));


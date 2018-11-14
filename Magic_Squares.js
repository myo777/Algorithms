****magicSqr


// 8 1 6
// 3 5 7
// 4 9 2


function magicSqr(arr)
{
  if( 
    (arr[0] + arr [1] + arr[2]) === 15 &&
    (arr[3] + arr [4] + arr[5]) === 15 &&
    (arr[6] + arr [7] + arr[8]) === 15 &&
    (arr[0] + arr [3] + arr[6]) === 15 &&
    (arr[1] + arr [4] + arr[7]) === 15 &&
    (arr[2] + arr [5] + arr[8]) === 15 &&
    (arr[0] + arr [4] + arr[8]) === 15 &&
    (arr[2] + arr [4] + arr[6]) === 15 
    ) 
  {
    return true;
  }
  return false;
}

console.log(magicSqr([8,1,6,3,5,7,4,9,2]));


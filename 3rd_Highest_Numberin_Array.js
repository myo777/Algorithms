******* 4.third max number

function thirdmax(arr){
var max1 = -Infinity;
var max2 = -Infinity;
var max3 = -Infinity;
  for (var i = 0; i < arr.length; i++){
    if (arr[i] > max1){
      max3 = max2;
      max2 = max1;
      max1 = arr[i];
  }else if (arr[i] > max2){ 
  
    max3 =max2;
    max2 = arr[i];
    
  }else if (arr[i] > max3){
    max3 = arr[i];

  }
}
  return max3;
}     
  
    
console.log(thirdmax([8,12,21,42,40]));



// var            value

// arr      [8,12,21,42,40]
// max1    -Infinity, 8,12,21,42,42,
// max2    -Infinity,  ,8 ,12,21,40
// max3    -Infinity,  ,  ,8 ,12,21
//  i      0,1,2,3,4,5
// return  21
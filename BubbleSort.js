*******1.BURBLE

//1.creat a function that takes a array integers as an argument
//2.iterate through the loop and compare the first element and next right element
//3 if the first element is greater then the next right element swap it to the position of the first element 
//3. keep doing this until sorted by n-1 (n is times) n is the size of the array
//4. return sorted array




function burBle (arr){
  var temp = 0;
  for (var i=0; i < arr.length-1;i++){
    for(var j=0; j <= arr.length-1;j++){
      if(arr[j] > arr[j+1]){
        temp = arr[j];
        arr[j]=arr[j+1];
        arr[j+1]= temp;
      }
    }
    
  }
  return arr;
}
console.log(burBle([70,7,23,11]));

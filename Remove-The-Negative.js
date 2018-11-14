var arr =[1,-2,4,1];
var newArr =[];

for (var i=0; i < arr.length; i++) 
{
  if (arr[i]>=0) 
  {
  newArr.push(arr[i]);
  
  }
  
}
console.log(newArr);


//   var      value
//   arr     [1,-2,4,1]
//   newArr   [],[1],[1,4,1]
//   i       0->1->2->3->4




function sumPrimes(num) 
{
  return Array.apply(0, Array(num + 1))
    .map(function(x, y)
    {
      return y 
  }).filter(function (i)
  {
      return (i > 1) && Array
          .apply(0, Array(1 + ~~Math.sqrt(i)))
      .every(function(x, y){      
            return (y < 2) || (i % y !== 0) 
      });
    }).reduce(function(current, previous)
    {
      return current + previous;
  });
}
console.log(sumPrimes(10));
console.log(sumPrimes(977));
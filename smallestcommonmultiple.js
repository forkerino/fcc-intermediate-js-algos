/*Smallest Common Multiple 
Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible 
by all numbers between 1 and 3.*/

function smallestCommons(arr) {
  const min = Math.min(arr[0],arr[1]), 
        max = Math.max(arr[0],arr[1]),
        range = [...Array(max+1).keys()].slice(min); 

  return range.reduce(function(a,b){
    for (let i = a; i<=a*b; i+=a){
      if (i % b===0 ) return i;
    } 
  });
}

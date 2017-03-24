/*Sum All Numbers in a Range 
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.*/

const sumAll = (arr) => ((Math.abs(arr[1]-arr[0])+1)/2)*(arr[0]+arr[1]);

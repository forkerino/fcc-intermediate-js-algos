/*Missing letters 
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.*/

function fearNotLetter(str) {
  const l = str.split('').map(e=>e.charCodeAt()).find((e, i, a) => e != a[0]+i);
  return l ? String.fromCharCode(l-1) : l; 
}

// function fearNotLetter(str) {
//   const start = str.charCodeAt();
//   const end = str.charCodeAt(str.length-1);
//   return end-start === str.length ?                         
//     String.fromCharCode(str.split('').map(e=>e.charCodeAt()).find((e, i) => e != start+i)-1) : 
//     undefined;
// }
  /* I find this hard to read
function fearNotLetter(str) {
  const first = str.charCodeAt();
  const last = str.charCodeAt(str.length-1);
  return last-first === str.length ? 
    String.fromCharCode(((str.length+1)*(first+last)/2) -                             str.split('').reduce((a, b) => a+b.charCodeAt(),0)) :
    undefined;
}
*/
  
  /* CLASSIC SOLUTION
function fearNotLetter(str) {
  var start = str.charCodeAt(0);
  
  for (var i = 1; i<str.length; i++){
    if (str.charCodeAt(i) !== start+i) {
      return String.fromCharCode(start+i);
    }
  }
  
  return undefined;
}
*/



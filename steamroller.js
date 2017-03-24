/*Steamroller 
Flatten a nested array. You must account for varying levels of nesting.*/

function steamrollArray(arr) {
 return arr.reduce((done, next) => done.concat(Array.isArray(next) ?       
   steamrollArray(next) : next), []);
}

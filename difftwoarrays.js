/*Diff Two Arrays 
Compare two arrays and return a new array with any items only found in one of the two given arrays, 
but not both. In other words, return the symmetric difference of the two arrays.*/

const diffArray = (arr1, arr2) => arr1.concat(arr2).filter(v => arr1.indexOf(v)<0 || arr2.indexOf(v)<0);

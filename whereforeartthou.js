/*Wherefore art thou 
Make a function that looks through an array of objects (first argument) and returns an array of all 
objects that have matching property and value pairs (second argument). Each property and value pair 
of the source object has to be present in the object from the collection if it is to be included in 
the returned array.*/

function whatIsInAName(collection, source) {
  return collection.filter(obj => Object.keys(source).every(k => obj[k] === source[k]));
}

function whatIsInAName(collection, source) {
  return collection.filter(function(obj){
    for (var prop in source) {
      if (!(obj.hasOwnProperty(prop) && obj[prop] === source[prop])) return false;
    }
    return true;
  }); 
}  

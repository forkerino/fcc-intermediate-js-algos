/*Everything Be True 
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).*/

const truthCheck = (collection, pre) => collection.every(v => v[pre]);
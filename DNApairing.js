/*DNA Pairing 
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.*/

function pairElement(str) {
  const pairs = {A: 'T', T: 'A', C: 'G', G: 'C'};
  return str.split("").map(x => [x, pairs[x]]);
}
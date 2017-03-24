/*Binary Agents 
Return an English translated sentence of the passed binary string.

The binary string will be space separated.*/

const binaryAgent = (str) => String.fromCharCode(...str.split(' ').map(b => parseInt(b,2)));

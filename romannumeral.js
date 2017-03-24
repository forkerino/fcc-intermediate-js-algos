/*Roman Numeral Converter 
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.*/

function convertToRoman(num) {
	const romans = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
	const decimals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

	return romans.reduce(function (pre, curr, i){ 
        let rep = Math.floor(num/decimals[i]); 
	    num %= decimals[i];
	    return pre + curr.repeat(rep); 
    },"");
}
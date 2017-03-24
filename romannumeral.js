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

// OLDER SOLUTION:

function convertToRoman(num) {
  var digits= num.toString(10).split("").map(function(t){return parseInt(t);});
  
  var romanNumerals = ["I", "V", "X", "L", "C", "D", "M"];
  var totalDigits = digits.length;
  var answer = "";
  
  for (currentDigit = 0; currentDigit<totalDigits; currentDigit++){
    powerOfTen = totalDigits-currentDigit-1; // calculate the power of ten of the current digit x = 0, x0=1, x00=2, x000=3;
    switch (digits[currentDigit]) { // in case of 0, don't add anything to the result
      case 0: break;
      case 1:
      case 2:
      case 3: // in case of 1,2,3, add x times the right roman numeral.
        answer += romanNumerals[powerOfTen*2].repeat(digits[currentDigit]);
        break;
      case 4: // in case of 4, use one of the numerals and one of the 5x numeral, 1 up in the array.
        answer += (romanNumerals[powerOfTen*2] + romanNumerals[powerOfTen*2 + 1]);
        break;
      case 5: // in case of 5, add the 5x numeral
        answer += romanNumerals[powerOfTen*2+1];
        break;
      case 6:
      case 7: 
      case 8: // 6,7,8, add 5x numeral followed by x times single numeral
        answer += romanNumerals[powerOfTen*2+1] + romanNumerals[powerOfTen*2].repeat(digits[currentDigit]-5);
        break;
      case 9: // 9, add single numeral followed by 10x numeral.
      answer += (romanNumerals[powerOfTen*2] + romanNumerals[powerOfTen*2 + 2]);
    }
  }
   
  return answer;
}

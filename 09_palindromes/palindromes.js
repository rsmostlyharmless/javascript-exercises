const palindromes = function (str) {
    let re = /[^A-Za-z0-9]/g;

    let lowRegStr = str.toLowerCase().replace(re, '');

    let reverseStr = lowRegStr.split('').reverse().join(''); 

        return reverseStr === lowRegStr;
};

// "/[\W_]/g" can be used also in place of "/[^A-Za-z0-9]/g"

/* Also works to find palindromes but fails the final test
    
function palindromes(str) {
    let re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    let len = str.length;
    for (let i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
*/

/* TOP code

const palindromes = function(string) {
  processedString = string.toLowerCase().replace(/[^a-z]/g, "");
  return (
    processedString
      .split("")
      .reverse()
      .join("") == processedString
  );
}; */
// Do not edit below this line
module.exports = palindromes;

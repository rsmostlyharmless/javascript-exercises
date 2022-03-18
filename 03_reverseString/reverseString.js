const reverseString = function(rts) {
    let gnirts = "";
    for (let i = rts.length - 1; i >= 0; i--) {
        gnirts += rts[i];
    }
    return gnirts;
};

//Could also use
/* function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
} */

// Do not edit below this line
module.exports = reverseString;

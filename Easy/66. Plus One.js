/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let lastIndex = digits.length-1;
    for (let i = lastIndex; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0
        } else {
            digits[i]++
            return digits;
        }
    }

    //this means that the first value is a 0, so we have to unshift a 1
    return [1].concat(digits);
};
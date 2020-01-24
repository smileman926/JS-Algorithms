/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let i = a.length-1;
  let j = b.length-1;
  let carry = 0;
  let result = '';
  while (i >= 0 || j >= 0) {
      let aDigit = a[i] || '0';
      let bDigit = b[j] || '0';
      let temp = parseInt(aDigit) + parseInt(bDigit) + carry;
      let digit = temp % 2;
      carry = Math.floor(temp / 2);
      result = digit + result;
      i--;
      j--;
   }
  if (carry !== 0) result = carry + result;
  return result;
};

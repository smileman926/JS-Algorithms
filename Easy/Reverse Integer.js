/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var op;
    y = parseInt(x.toString().split('').reverse().join('')) * op;
    if( y >Math.pow(2,31)- 1 || y < Math.pow(2,31)*(-1))
        return 0;
     return y;
       
};

/**
# test case
   Input: 123
   Output: 321
# test case
   Input: -123
   Output: -321
# test case
   Input: 120
   Output: 21 
# test case 
    Input: 23231492489248224924
    Output: 0
# test case
    Input: -3430439048390849039048
    Output: 0
*/
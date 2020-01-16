/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   const original = x
   let reversed = 0
   
   if(x < 10 && x >= 0) {
       return true
   }
    
    if(x % 10 === 0 || x < 0) {
       return false
   }
    
    while(x !== 0 ) {
        reversed = reversed * 10 + x % 10
        x = Math.trunc(x/10)
    }
    
    return !(original - reversed)
};


/** 
	Test Case -10
	Result False
	Test Case 241
	Return False
	Test Case 1010
	Result False
	Test Case 292
	Return True

**/
	
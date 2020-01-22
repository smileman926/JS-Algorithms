/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	// trim in the case of trailing spaces;
    return s.trim().split(' ').pop().length;
};
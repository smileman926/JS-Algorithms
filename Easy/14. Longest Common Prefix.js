/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
        var strLength=strs.length;
        if (strLength===0) return '';
        var A= strs.sort();
        var str1= A[0];
        var str2=A[strLength-1];
        var i=0;
        var length =str1.length>str2.length?str2.length:str1.length;
        while ( str1.charAt(i)===str2.charAt(i)&& i<length)
            {
                i++;
            }
     
      return i!=0?A[0].substr(0,i):'';
    
};

/**
Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Input:["dog"]
Output:"dog"

Input:[]
Output:''
**/
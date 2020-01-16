/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var dic = {
      'I':1, 'V':5,'X':10,'L':50, 'C':100 , 'D':500,'M':1000
  };
   
  var s = s.split('');
  var result=0;
    for(var i=0;i<s.length-1;i++)
      {
          if(dic[s[i]]<dic[s[i+1]])
              {
                  result-=dic[s[i]];
              }
          else
              {
                  result+=dic[s[i]];
              }
      }
    result=result+dic[s[s.length-1]];
   return result;
};


/***
Example 1:

Input: "III"
Output: 3
Example 2:

Input: "IV"
Output: 4
Example 3:

Input: "IX"
Output: 9
Example 4:

Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 5:

Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

***/
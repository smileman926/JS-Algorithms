/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
     var i=0,j=0;
      var position=0;
     var needleLength=needle.length;
    if(haystack.length<needleLength)
        {
            return -1;
        }
    if(needleLength===0)
      {
            return 0;
      }
   
     while(haystack[i]!=null)
        {
              if(haystack[i]===needle[0])
                {
                    if(haystack.slice(i,needleLength+i)=== needle)
                        {
                            return i;
                        }
                    
                }
            i++;
        }
    return -1;
    
};
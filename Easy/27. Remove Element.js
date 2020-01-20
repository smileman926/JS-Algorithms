/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
      var position=0;
    var i=0;
    while(nums[i]!=null)
        {
            if(nums[i]!==val)
                {
                    nums[position]=nums[i];
                    position++;        
                }
            i++;      
        }
 
    return position--;
};
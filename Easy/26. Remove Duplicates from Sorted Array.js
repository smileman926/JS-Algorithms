/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    var i=0;
    
    var prefix=nums[0];
    var position=1;
    while (nums[i]!=null)
        {
            i++;
            if(nums[i]!=prefix)
                {
                    prefix=nums[i];
                    nums[position]=prefix;
                    position++;
                }
        }
    return position-1;
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var position=-1;
    var i=0;
    var length = nums.length;
    while (i<=length)
        {
            if(nums[i]>target && position===-1)
                {
                    position = i;
                }
            if(nums[i]===target)
                {
                    console.log(i);
                    return i;
                }
            i++;
        }
    if(position === -1)
        {
            return length;
        }
    else
        {
            return position;
        }
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        if (target - nums[i] in map) {
            return [map[target - nums[i]], i];
        }
        map[nums[i]] = i;
    }
};

/**
 * Given nums = [2, 7, 11, 15], target = 9,
   Output [0,1]

   Given nums = [2,8,7,3,4,24], target= 7
   Output [3,4]
 * 
 */

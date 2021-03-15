/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  var temp = [];
  for (var i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    var target = -nums[i];
    var left = i + 1;
    var right = nums.length - 1;
    while (left < right) {
      var total = nums[left] + nums[right];
      if (total === target) {
        temp.push([nums[i], nums[left], nums[right]]);
        left += 1;
        right -= 1;
        while (left < right && nums[left] === nums[left - 1]) {
          left += 1;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right -= 1;
        }
      } else if (total < target) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }
  return temp;
};
// @lc code=end

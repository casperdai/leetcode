/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小移动次数使数组元素相等
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  nums.sort((a, b) => a - b)
  var count = 0
  for (var i = nums.length - 1; i >= 1; i--) {
    count += nums[i] - nums[0]
  }
  var moves = 0;
  for (var i = 1; i < nums.length; i++) {
      var diff = (moves + nums[i]) - nums[i - 1];
      nums[i] += moves;
      moves += diff;
  }
  return count
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=1636 lang=javascript
 *
 * [1636] 按照频率将数组升序排序
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  var map = {}
  for (var i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1
  }
  return nums.sort((a, b) => map[a] === map[b] ? b - a : map[a] - map[b])
};
// @lc code=end

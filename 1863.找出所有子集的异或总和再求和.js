/*
 * @lc app=leetcode.cn id=1863 lang=javascript
 *
 * [1863] 找出所有子集的异或总和再求和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
  var result = 0
  function xor (curr, i, length) {
    if (i === length) {
      result += curr
      return
    }
    xor(curr, i + 1, length)
    xor(curr ^ nums[i], i + 1, length)
  }
  xor(0, 0, nums.length)
  return result
};
// @lc code=end

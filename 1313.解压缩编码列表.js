/*
 * @lc app=leetcode.cn id=1313 lang=javascript
 *
 * [1313] 解压缩编码列表
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
  var result = []
  for (var i = 0; i < nums.length; i += 2) {
    for (var j = nums[i]; j > 0; j--) {
      result.push(nums[i + 1])
    }
  }
  return result
};
// @lc code=end

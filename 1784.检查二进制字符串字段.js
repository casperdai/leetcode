/*
 * @lc app=leetcode.cn id=1784 lang=javascript
 *
 * [1784] 检查二进制字符串字段
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
  return !/1+0+1+/.test(s)
};
// @lc code=end

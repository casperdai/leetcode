/*
 * @lc app=leetcode.cn id=1903 lang=javascript
 *
 * [1903] 字符串中的最大奇数
 */

// @lc code=start
/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
  for (var i = num.length - 1; i >= 0; i--) {
    if (num.charCodeAt(i) % 2 !== 0) {
      return num.slice(0, i + 1)
    }
  }
  return ''
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=1876 lang=javascript
 *
 * [1876] 长度为三且各字符不同的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
  var count = 0
  var length = s.length
  var i = 2
  for (; i < length; i++) {
    if (s[i - 2] !== s[i - 1]) {
      if (s[i] === s[i - 1]) {
        i += 1
      } else {
        if (s[i] !== s[i - 2]) {
          count += 1
        }
      }
    }
  }
  return count
};
// @lc code=end

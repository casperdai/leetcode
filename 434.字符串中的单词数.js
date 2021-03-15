/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  var count = 0
  var first = true
  for (var i = 0; i < s.length; i++) {
    if (s[i] !== ' ' && (first || s[i - 1] === ' ')) {
      first = false
      count += 1
    }
  }
  return count
};
// @lc code=end

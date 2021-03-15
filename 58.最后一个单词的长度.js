/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var length = 0;
  var index = s.length - 1;
  while (index >= 0) {
    if (s[index] === ' ') {
      if (length !== 0) {
        break;
      }
    } else {
      length += 1;
    }
    index -= 1;
  }
  return length;
};
// @lc code=end

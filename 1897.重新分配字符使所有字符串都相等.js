/*
 * @lc app=leetcode.cn id=1897 lang=javascript
 *
 * [1897] 重新分配字符使所有字符串都相等
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
  var length = words.length
  var total = words.reduce((t, s) => t + s.length, 0)
  if (total % length !== 0) {
    return false
  }
  var map = Array(26).fill(0)
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < words[i].length; j++) {
      map[words[i].charCodeAt(j) - 97] += 1
    }
  }
  return map.filter(val => val % length !== 0).length === 0
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=1528 lang=javascript
 *
 * [1528] 重新排列字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  var result = []
  for (var i = 0; i < indices.length; i++) {
    result[indices[i]] = s[i]
  }
  return result.join('')
};
// @lc code=end

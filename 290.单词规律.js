/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  var arr = s.split(' ');
  if (pattern.length !== arr.length) {
    return false;
  }
  var hash = {};
  var hash2 = {};
  for (var i = 0; i < pattern.length; i++) {
    if (hash[pattern[i]] !== hash2[arr[i]]) {
      return false;
    }
    hash[pattern[i]] = i;
    hash2[arr[i]] = i;
  }
  return true;
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs || strs.length === 0) {
    return ''
  }
  if (strs.length === 1) {
    return strs[0];
  }
  var str = '';
  var index = 0;
  var length = strs.length;
  var first = strs[0];
  var aLength = first.length;
  while (index < aLength) {
    var s = first[index];
    for (var i = 1; i < length; i++) {
      if (strs[i][index] !== s) {
        return str;
      }
    }
    index += 1;
    str += s;
  }
  return str;
};
// @lc code=end

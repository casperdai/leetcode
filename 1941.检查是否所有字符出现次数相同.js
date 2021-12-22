/*
 * @lc app=leetcode.cn id=1941 lang=javascript
 *
 * [1941] 检查是否所有字符出现次数相同
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
  var map = new Map()
  for (var i = 0; i < s.length; i++) {
    var code = s.charCodeAt(i) - 97
    if (map.has(code)) {
      map.set(code, map.get(code) + 1)
    } else {
      map.set(code, 1)
    }
  }
  return new Set(map.values()).size === 1
};
// @lc code=end

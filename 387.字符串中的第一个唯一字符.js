/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  var map = {};
  for (var i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }
  for (var j = 0; j < s.length; j++) {
    if (map[s[j]] === 1) {
      return j;
    }
  }
  return -1;
};
// @lc code=end

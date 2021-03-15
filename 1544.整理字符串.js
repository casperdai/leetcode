/*
 * @lc app=leetcode.cn id=1544 lang=javascript
 *
 * [1544] 整理字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
  function error (s1, s2) {
    return Math.abs(s1.charCodeAt() - s2.charCodeAt()) === 32
  }
  var arr = []
  for (var i = 0; i < s.length; i++) {
    if (arr.length === 0 || !error(s[i], arr[arr.length - 1])) {
      arr.push(s[i])
    } else {
      arr.pop()
    }
  }
  return arr.join('')
};
// @lc code=end

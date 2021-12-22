/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  function change (s) {
    var count = 0
    var word = ''
    for (var i = s.length - 1; i >= 0; i--) {
      if (s[i] === '#') {
        count += 1
        if (count >= i) {
          break
        }
      } else if (count > 0) {
        count -= 1
      } else {
        word = s[i] + word
      }
    }
    return word
  }
  return change(S) === change(T)
};
// @lc code=end

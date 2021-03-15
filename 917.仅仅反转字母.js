/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  function isEn (s) {
    return s >= 'A' && s <= 'Z' || s >= 'a' && s <= 'z'
  }
  var result = ''
  var l = 0
  var r = S.length - 1
  var ls = ''
  var rs = ''
  while (l <= r) {
    while (l < r && !isEn(S[l])) {
      ls += S[l++]
    }

    while (l < r && !isEn(S[r])) {
      rs = S[r--] + rs
    }

    if (l === r) {
      ls += S[l++]
    } else if (l < r) {
      ls += S[r--]
      rs = S[l++] + rs
    }
  }
  return ls + rs
};
// @lc code=end

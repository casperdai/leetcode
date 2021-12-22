/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  var code = 0;
  for (var i = 0; i < s.length; i++) {
    code ^= s.charCodeAt(i) ^ t.charCodeAt(i);
  }
  code ^= t.charCodeAt(t.length - 1);
  return String.fromCharCode(code);
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
function isA2Z (s) {
  return s >= 'A' && s <= 'Z'
}
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  if (word.length <= 1) {
    return true
  }
  var i = 1
  var pre = isA2Z(word[0])
  while (i < word.length) {
    var bool = isA2Z(word[i])
    if (i === 1) {
      if (!pre && bool) {
        return false
      }
    } else if (bool !== pre) {
      return false
    }
    pre = bool
    i += 1
  }
  return true
};
// @lc code=end

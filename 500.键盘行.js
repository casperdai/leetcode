/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
var KeyMap = {
  Q: 1,
  W: 1,
  E: 1,
  R: 1,
  T: 1,
  Y: 1,
  U: 1,
  I: 1,
  O: 1,
  P: 1,
  A: 2,
  S: 2,
  D: 2,
  F: 2,
  G: 2,
  H: 2,
  J: 2,
  K: 2,
  L: 2,
  Z: 3,
  X: 3,
  C: 3,
  V: 3,
  B: 3,
  N: 3,
  M: 3
}
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  var result = []
  for (var i = 0; i < words.length; i++) {
    var s = words[i].toUpperCase()
    var is = true
    var line = 0
    for (var j = 0; j < s.length; j++) {
      if (line === 0) {
        line = KeyMap[s[j]]
      } else if (line !== KeyMap[s[j]]) {
        is = false
        break
      }
    }
    if (is) {
      result.push(words[i])
    }
  }
  return result
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  var code = 0;
  var l = 0;
  var r = 0;
  var ll = ransomNote.length;
  var rl = magazine.length;
  var map = {};
  if (ll > rl) {
    return false;
  }
  while (l < ll) {
    if (ransomNote[l] in map) {
      map[ransomNote[l]] += 1;
    } else {
      code += 1;
      map[ransomNote[l]] = 1;
    }
    l += 1;
  }
  while (code > 0 && r < rl) {
    if (magazine[r] in map && map[magazine[r]] > 0) {
      map[magazine[r]] -= 1;
      if (map[magazine[r]] === 0) {
        code -= 1;
      }
    }
    r += 1;
  }
  return code === 0;
};
// @lc code=end

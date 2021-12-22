/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  var count = 0;
  var hash = {};
  var c;
  for (var i = 0; i < s.length; i++) {
    c = s[i].charCodeAt();
    if (c in hash) {
      if (hash[c] === 0) {
        count += 1;
      }
      hash[c] += 1;
      if (hash[c] === 0) {
        count -= 1;
      }
    } else {
      hash[c] = 1;
      count += 1;
    }
    c = t[i].charCodeAt();
    if (c in hash) {
      if (hash[c] === 0) {
        count += 1;
      }
      hash[c] -= 1;
      if (hash[c] === 0) {
        count -= 1;
      }
    } else {
      hash[c] = -1;
      count += 1;
    }
  }
  return count === 0;
};
// @lc code=end

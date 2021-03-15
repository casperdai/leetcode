/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  var map1 = {};
  var map2 = {};
  for (var i = 0; i < s.length; i++) {
    if (map1[s[i]] !== map2[t[i]]) {
      return false;
    }
    map1[s[i]] = i;
    map2[t[i]] = i;
  }
  return true;
};
// @lc code=end

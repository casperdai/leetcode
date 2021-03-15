/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle) {
    return 0;
  }
  var c1 = 0;
  var c2 = 0;
  var max = haystack.length;
  var need = needle.length;
  var step = max - need + 1;
  var len;
  while (c1 < step) {
    while (c1 < step && haystack[c1] !== needle[0]) {
      c1 += 1;
    }
    len = c2 = 0;
    while (c1 < max && c2 < need && haystack[c1] === needle[c2]) {
      c1 += 1;
      c2 += 1;
      len += 1;
    }
    if (len === need) {
      return c1 - need;
    }
    c1 = c1 - len + 1;
  }
  return -1;
};
// @lc code=end

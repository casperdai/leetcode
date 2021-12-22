/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  if (a === '0') {
    return b;
  }
  if (b === '0') {
    return a;
  }
  var more = 0;
  var aLen = a.length - 1;
  var bLen = b.length - 1;
  var s = '';
  while (aLen >= 0 || bLen >= 0) {
    if (aLen >= 0) {
      if (a[aLen] === '1') {
        more += 1;
      }
      aLen -= 1;
    }
    if (bLen >= 0) {
      if (b[bLen] === '1') {
        more += 1;
      }
      bLen -= 1;
    }
    if (more >= 2) {
      s = (more % 2) + s;
      more = 1;
    } else {
      s = more + s
      more = 0;
    }
  }
  if (more === 1) {
    s = more + s
  }
  return s;
};
// @lc code=end

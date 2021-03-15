/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  var arr = [];
  var m = t.length;
  var st = 'a'.charCodeAt()
  arr[m] = [];
  for (var i = 0; i < 26; i++) {
    arr[m][i] = m;
  }
  for (var i = m - 1; i >= 0; i--) {
    arr[i] = [];
    for (var j = 0; j < 26; j++) {
      if (t.charCodeAt(i) === j + st) {
        arr[i][j] = i;
      } else {
        arr[i][j] = arr[i + 1][j];
      }
    }
  }
  var start = 0;
  for (var i = 0; i < s.length; i++) {
    if (arr[start][s.charCodeAt(i) - st] === m) {
      return false;
    }
    start = arr[start][s.charCodeAt(i) - st] + 1;
  }
  return true;
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=893 lang=javascript
 *
 * [893] 特殊等价字符串组
 */

// @lc code=start
/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
  function change (s) {
    var sarr = []
    var darr = []
    for (var i = 0; i < s.length; i++) {
      var code = s.charCodeAt(i) - 97
      if (i % 2 === 0) {
        darr[code] = (darr[code] || 0) + 1
      } else {
        sarr[code] = (sarr[code] || 0) + 1
      }
    }
    return sarr.join(',') + ':' + darr.join(',')
  }
  var map = {}
  for (var i = 0; i < A.length; i++) {
    var t = change(A[i])
    if (!map[t]) {
      map[t] = true
    }
  }
  return Object.keys(map).length
};
// @lc code=end

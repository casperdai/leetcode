/*
 * @lc app=leetcode.cn id=1640 lang=javascript
 *
 * [1640] 能否连接形成数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
  var t = arr.join(',') + ','
  var count = 0
  for (var i = 0; i < pieces.length; i++) {
    var s = pieces[i].join(',') + ','
    if (~t.indexOf(s)) {
      count += pieces[i].length
    } else {
      return false
    }
  }
  return count === arr.length
};
// @lc code=end

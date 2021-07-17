/*
 * @lc app=leetcode.cn id=1925 lang=javascript
 *
 * [1925] 统计平方和三元组的数目
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
  var max = n * n
  var map = {}
  var res = 0
  for (var m = 5; m <= n; m++) {
    map[m * m] = 1
  }
  for (var i = 3; i < n; i++) {
    var pre = i * i
    if (pre >= max) {
      break
    }
    for (var j = i + 1; j < n; j++) {
      var curr = j * j
      if (curr >= max || pre + curr > max) {
        break
      }
      if (map[pre + curr]) {
        res += 1
      }
    }
  }
  return res * 2
};
// @lc code=end

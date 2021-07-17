/*
 * @lc app=leetcode.cn id=1742 lang=javascript
 *
 * [1742] 盒子中小球的最大数量
 */

// @lc code=start
/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
  var map = new Map()
  var max = 1
  function count (val) {
    return ('' + val).split('').reduce((t, v) => t + +v, 0)
  }
  for (var i = lowLimit; i <= highLimit; i++) {
    var n = count(i)
    if (map.has(n)) {
      var curr = map.get(n) + 1
      map.set(n, curr)
      if (curr > max) {
        max = curr
      }
    } else {
      map.set(n, 1)
    }
  }
  return max
};
// @lc code=end

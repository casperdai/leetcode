/*
 * @lc app=leetcode.cn id=970 lang=javascript
 *
 * [970] 强整数
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
  if (bound < 2) {
    return []
  }
  if (x === 1 && y === 1) {
    return [2]
  }
  var min = Math.min(x, y)
  var max = Math.max(x, y)
  var minV = min === 1 ? 0 : Math.floor(Math.log(bound) / Math.log(min))
  var maxV = Math.floor(Math.log(bound) / Math.log(max))
  var map = {}
  for (var i = 0; i <= minV; i++) {
    for (var j = 0; j <= maxV; j++) {
      var val = Math.pow(min, i) + Math.pow(max, j)
      if (val <= bound) {
        map[val] = true
      } else {
        break
      }
    }
  }
  return Object.keys(map)
};
// @lc code=end

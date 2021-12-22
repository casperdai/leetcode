/*
 * @lc app=leetcode.cn id=1237 lang=javascript
 *
 * [1237] 找出给定方程的正整数解
 */

// @lc code=start
/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function(customfunction, z) {
  var result = []
  var min = 1000
  for (var i = 1; i <= 1000; i++) {
    for (var j = 1; j <= min; j++) {
      var r = customfunction.f(i, j)
      if (r === z) {
        result.push([i, j])
      } else if (r > z) {
        if (j === 1) {
          return result
        } else {
          min = j - 1
        }
        break
      }
    }
  }
  return result
};
// @lc code=end

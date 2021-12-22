/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  var result = [];
  for (var i = 0; i < numRows; i++) {
    result[i] = [];
    for (var j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        result[i].push(1);
      } else {
        result[i].push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
  }
  return result;
};
// @lc code=end

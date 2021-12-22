/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  var result = [];
  for (var i = 0; i <= rowIndex; i++) {
    result[i] = 1;
    for (var j = i; j > 1; j--) {
      result[j - 1] += result[j - 2];
    }
  }
  return result;
};
// @lc code=end

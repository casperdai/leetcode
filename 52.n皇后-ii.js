/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
function backtrack (list, row, temp, n) {
  if (row === n) {
    list.push(1);
    return;
  }
  for (var i = 0; i < n; i++) {
    var find = false;
    for (var j = 1; j <= temp.length; j++) {
      if (temp[row - j] === i || temp[row - j] === i - j || temp[row - j] === i + j) {
        find = true;
        break;
      }
    }
    if (!find) {
      temp.push(i);
      backtrack(list, row + 1, temp, n);
      temp.pop();
    }
  }
}
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  var list = [];
  backtrack(list, 0, [], n);
  return list.length;
};
// @lc code=end

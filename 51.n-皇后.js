/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
function backtrack (list, row, col, temp, n) {
  for (var i = 1; i <= temp.length; i++) {
    if (temp[row - i] === col || temp[row - i] === col - i || temp[row - i] === col + i) {
      return;
    }
  }
  temp.push(col);
  if (temp.length === n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
      arr[i] = '';
      for (var j = 0; j < n; j++) {
        if (j === temp[i]) {
          arr[i] += 'Q';
        } else {
          arr[i] += '.';
        }
      }
    }
    list.push(arr);
  } else {
    for (var i = 0; i < n; i++) {
      backtrack(list, row + 1, i, temp, n);
    }
  }
  temp.pop();
}
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  var list = [];
  for (var i = 0; i < n; i++) {
    backtrack(list, 0, i, [], n);
  }
  return list;
};
// @lc code=end

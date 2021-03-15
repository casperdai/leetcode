/*
 * @lc app=leetcode.cn id=985 lang=javascript
 *
 * [985] 查询后的偶数和
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
  var result = []
  var sum = A.reduce((total, val) => val % 2 === 0 ? total + val : total, 0)
  for (var i = 0; i < queries.length; i++) {
    var val = queries[i][0]
    var index = queries[i][1]
    if (A[index] % 2 === 0) {
      sum -= A[index]
    }
    A[index] += val
    if (A[index] % 2 === 0) {
      sum += A[index]
    }
    result.push(sum)
  }
  return result
};
// @lc code=end

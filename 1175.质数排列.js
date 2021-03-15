/*
 * @lc app=leetcode.cn id=1175 lang=javascript
 *
 * [1175] 质数排列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
  var su = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
  var count = su.findIndex(val => val > n)
  if (count === -1) {
    count = su.length
  }

  var MOD = 10**9 + 7;
  function A (m) {
    return m <= 1 ? 1 : (A(m - 1) * m) % MOD
  }

  var result = 1
  for (var i = 2; i <= n - count; i++) {
    result = result * i % MOD
  }

  for (var i = 2; i <= count; i++) {
    result = result * i % MOD
  }

  return result % MOD
};
// @lc code=end

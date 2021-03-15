/*
 * @lc app=leetcode.cn id=762 lang=javascript
 *
 * [762] 二进制表示中质数个计算置位
 */

// @lc code=start
/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
  var arr = { 2: true, 3: true, 5: true, 7: true, 11: true, 13: true, 17: true, 19: true }
  var count = 0
  for (var i = L; i <= R; i++) {
    if (arr[i.toString(2).replace(/0/g, '').length]) {
      count += 1
    }
  }
  return count
};
// @lc code=end

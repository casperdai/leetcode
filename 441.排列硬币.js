/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let left = 0
  let right = n
  while (true) {
    if (left > right) {
      return right
    }
    let mid = Math.ceil((left + right) / 2)
    let count = (1 + mid) * mid / 2
    if (count > n) {
      right = mid - 1
    } else if (count < n) {
      left = mid + 1
    } else {
      return mid
    }
  }
};
// @lc code=end

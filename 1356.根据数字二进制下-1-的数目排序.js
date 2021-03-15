/*
 * @lc app=leetcode.cn id=1356 lang=javascript
 *
 * [1356] 根据数字二进制下 1 的数目排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
  function countBits(n) {
    var count = 0
    while (n) {
      count += n & 1
      n >>= 1
    }
    return count
  }
  return arr.map(val => {
    return {
      count: countBits(val),
      val
    }
  }).sort((a, b) => a.count === b.count ? a.val - b.val : a.count - b.count).map(item => item.val)
};
// @lc code=end

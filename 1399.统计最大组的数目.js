/*
 * @lc app=leetcode.cn id=1399 lang=javascript
 *
 * [1399] 统计最大组的数目
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
  var map = {}
  function getCount (n) {
    var sum = 0
    while (n) {
      sum += n % 10
      n = Math.floor(n / 10)
    }
    return sum
  }
  var max = 0
  for (var i = 1; i <= n; i++) {
    var t = i < 10 ? i : getCount(i)
    map[t] = (map[t] || 0) + 1
    if (map[t] > max) {
      max = map[t]
    }
  }
  return Object.values(map).filter(val => val === max).length
};
// @lc code=end

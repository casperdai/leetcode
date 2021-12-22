/*
 * @lc app=leetcode.cn id=1342 lang=javascript
 *
 * [1342] 将数字变成 0 的操作次数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
  if (num === 0) {
    return 0
  }
  num = num.toString(2)
  var count = 1
  for (var i = 1; i < num.length; i++) {
    if (num[i] === '0') {
      count += 1
    } else {
      count += 2
    }
  }
  return count
};
// @lc code=end

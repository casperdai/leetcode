/*
 * @lc app=leetcode.cn id=1374 lang=javascript
 *
 * [1374] 生成每种字符都是奇数个的字符串
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
  var reuslt = ''
  if (n % 2 === 0) {
    n -= 1
    reuslt = 'b'
  }
  for (var i = 0; i < n; i++) {
    reuslt += 'a'
  }
  return reuslt
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=1441 lang=javascript
 *
 * [1441] 用栈操作构建数组
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
  var it = 1
  var i = 0
  var result = []
  while (i < target.length) {
    var t = target[i]
    while (it !== t) {
      result.push('Push', 'Pop')
      it += 1
    }
    result.push('Push')
    i += 1
    it += 1
  }
  return result
};
// @lc code=end

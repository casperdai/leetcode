/*
 * @lc app=leetcode.cn id=1598 lang=javascript
 *
 * [1598] 文件夹操作日志搜集器
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
  var count = 0
  for (var i = 0; i < logs.length; i++) {
    switch (logs[i]) {
      case '../':
        if (count > 0) {
          count -= 1
        }
        break
      case './':
        break
      default:
        count += 1
        break
    }
  }
  return count
};
// @lc code=end

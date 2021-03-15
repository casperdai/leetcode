/*
 * @lc app=leetcode.cn id=1678 lang=javascript
 *
 * [1678] 设计 Goal 解析器
 */

// @lc code=start
/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
  var result = ''
  for (var i = 0; i < command.length; i++) {
    if (command[i] === 'G') {
      result += 'G'
    } else if (command[i] === ')') {
      if (command[i - 1] === '(') {
        result += 'o'
      } else {
        result += 'al'
      }
    }
  }
  return result
};
// @lc code=end

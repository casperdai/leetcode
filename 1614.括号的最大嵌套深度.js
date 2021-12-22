/*
 * @lc app=leetcode.cn id=1614 lang=javascript
 *
 * [1614] 括号的最大嵌套深度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
  var depth = 0
  var has = 0
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      has += 1
    } else if (s[i] === ')') {
      depth = Math.max(depth, has)
      has -= 1
    }
  }
  return depth
};
// @lc code=end

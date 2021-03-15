/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var stack = [];
  for (var i = 0; i < s.length; i++) {
    var temp = s[i];
    switch (temp) {
      case '(':
      case '[':
      case '{':
        stack.push(temp);
        break;
      case ')':
        if (stack.pop() !== '(') {
          return false;
        }
        break;
      case ']':
        if (stack.pop() !== '[') {
          return false;
        }
        break;
      case '}':
        if (stack.pop() !== '{') {
          return false;
        }
        break;
      default:
        break;
    }
  }
  return stack.length === 0;
};
// @lc code=end

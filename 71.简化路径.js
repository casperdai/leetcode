/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  var stack = [];
  var arr = path.split('/');
  for (var i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '':
      case '.':
        break;
      case '..':
        stack.pop();
        break;
      default:
        stack.push(arr[i]);
        break;
    }
  }
  return '/' + stack.join('/');
};
// @lc code=end

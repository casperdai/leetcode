/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  var arr = []
  var index = -1
  for (var i = 0; i < S.length; i++) {
    if (S[i] === arr[index]) {
      arr.pop()
      index -= 1
    } else {
      arr.push(S[i])
      index += 1
    }
  }
  return arr.join('')
};
// @lc code=end

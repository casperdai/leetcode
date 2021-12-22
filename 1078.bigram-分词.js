/*
 * @lc app=leetcode.cn id=1078 lang=javascript
 *
 * [1078] Bigram 分词
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
  var result = []
  var arr = text.split(' ')
  for (var i = 2; i < arr.length; i++) {
    if (arr[i - 1] === second && arr[i - 2] === first) {
      result.push(arr[i])
    }
  }
  return result
};
// @lc code=end

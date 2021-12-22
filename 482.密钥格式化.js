/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */

// @lc code=start
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  var index = S.length - 1
  var result = ''
  var count = 0
  while (index >= 0) {
    if (S[index] !== '-') {
      if (count === K) {
        count = 0
        result = '-' + result
      }
      result = S[index].toUpperCase() + result
      count += 1
    }
    index -= 1
  }
  return result
};
// @lc code=end

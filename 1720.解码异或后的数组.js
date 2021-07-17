/*
 * @lc app=leetcode.cn id=1720 lang=javascript
 *
 * [1720] 解码异或后的数组
 */

// @lc code=start
/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
  var result = [first]
  var t = first
  for (var i = 0; i < encoded.length; i++) {
    result.push(t = encoded[i] ^ t)
  }
  return result
};
// @lc code=end

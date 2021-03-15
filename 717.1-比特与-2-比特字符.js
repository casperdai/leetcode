/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1比特与2比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  var count = 0
  for (var i = bits.length - 2; i >= 0; i--) {
    if (bits[i] === 0) {
      break
    }
    count += 1
  }
  return count % 2 === 0
};
// @lc code=end

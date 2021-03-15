/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits[0] === 0) {
    return [1];
  }
  var index = digits.length - 1;
  var last = digits[index];
  while (last === 9) {
    digits[index] = 0;
    index -= 1;
    last = digits[index];
  }
  if (index < 0) {
    digits.unshift(1);
  } else {
    digits[index] += 1;
  }
  return digits;
};
// @lc code=end

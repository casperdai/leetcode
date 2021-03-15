/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  if (letters[letters.length - 1] <= target) {
    return letters[0]
  }
  var index = 0
  while (true) {
    if (letters[index] > target) {
      return letters[index]
    }
    index += 1
  }
};
// @lc code=end

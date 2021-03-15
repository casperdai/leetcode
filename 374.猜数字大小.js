/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  var start = 1;
  var end = n;
  var mid;
  while (true) {
    mid = Math.floor((start + end) / 2);
    var pick = guess(mid);
    if (pick === 0) {
      return mid;
    }
    if (pick === -1) {
      end = mid - 1;
    }
    if (pick === 1) {
      start = mid + 1;
    }
  }
};
// @lc code=end

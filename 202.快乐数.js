/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
function getNext (n, hash) {
  if (n === 1) {
    return true;
  }
  var next = 0;
  while (n > 0) {
    next += Math.pow(n % 10, 2);
    n = parseInt(n / 10);
  }
  if (hash[next]) {
    return false;
  }
  hash[next] = true;
  return getNext(next, hash);
}
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  return getNext(n, {});
};
// @lc code=end

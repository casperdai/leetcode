/*
 * @lc app=leetcode.cn id=1033 lang=javascript
 *
 * [1033] 移动石子直到连续
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
  [a, b, c] = [a, b, c].sort((i, j) => i - j)
  return [b - a === 2 || c - b === 2 ? 1 : (b - a === 1 ? 0 : 1) + (c - b === 1 ? 0 : 1), c - a - 2]
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  if (stones.length === 1) {
    return stones[0]
  }
  var last = stones.length - 1
  while (last > 0) {
    stones.sort((a, b) => a - b)
    stones[last - 1] = stones[last] - stones[last - 1]
    stones.pop()
    last -= 1
    if (stones[last] === 0) {
      stones.pop()
      last -= 1
    }
  }
  return last === 0 ? stones[last] : 0
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  var f1 = cost[cost.length - 2]
  var f2 = cost[cost.length - 1]
  for (var i = cost.length - 3; i >= 0; i--) {
    [f1, f2] = [cost[i] + Math.min(f1, f2), f1]
  }
  return Math.min(f1, f2)
};
// @lc code=end

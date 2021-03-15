/*
 * @lc app=leetcode.cn id=1491 lang=javascript
 *
 * [1491] 去掉最低工资和最高工资后的工资平均值
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  var min = Infinity
  var max = 0
  return (salary.reduce((total, val) => {
    min = Math.min(min, val)
    max = Math.max(max, val)
    return total + val
  }, 0) - min - max) / (salary.length - 2)
};
// @lc code=end

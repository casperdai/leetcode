/*
 * @lc app=leetcode.cn id=1103 lang=javascript
 *
 * [1103] 分糖果 II
 */

// @lc code=start
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  var count = Math.floor((2 * candies + 0.25) ** 0.5 - 0.5)
  var diff = candies - (1 + count) * count * 0.5
  var [r, c] = [Math.floor(count / num_people), count % num_people]
  var result = []
  for (var i = 0; i < num_people; i++) {
    result[i] = (i + 1 + (i + 1 + num_people * (r - 1))) * r * 0.5
    if (i < c) {
      result[i] += i + 1 + num_people * r
    }
  }
  result[c] += diff
  return result
};
// @lc code=end

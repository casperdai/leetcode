/*
 * @lc app=leetcode.cn id=1700 lang=javascript
 *
 * [1700] 无法吃午餐的学生数量
 */

// @lc code=start
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
  var map = { 0: 0, 1: 0 }
  for (var i = 0; i < students.length; i++) {
    map[students[i]] += 1
  }
  var index = 0
  while (map[sandwiches[index]] > 0) {
    map[sandwiches[index]] -= 1
    index += 1
  }
  return map[0] + map[1]
};
// @lc code=end

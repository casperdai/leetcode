/*
 * @lc app=leetcode.cn id=690 lang=javascript
 *
 * [690] 员工的重要性
 */

// @lc code=start
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
  var map = {}
  var cursor = 0
  var length = employees.length
  var stack = [id]
  var total = 0
  var temp
  while (stack.length > 0) {
    temp = stack.pop()
    if (!map[temp]) {
      while (cursor < length) {
        cursor += 1
        if (employees[cursor - 1].id === temp) {
          temp = employees[cursor - 1]
          break
        }
        map[employees[cursor - 1].id] = employees[cursor - 1]
      }
    } else {
      temp = map[temp]
    }
    total += temp.importance
    stack = stack.concat(temp.subordinates)
  }
  return total
};
// @lc code=end

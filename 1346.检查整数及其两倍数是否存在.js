/*
 * @lc app=leetcode.cn id=1346 lang=javascript
 *
 * [1346] 检查整数及其两倍数是否存在
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  var map = {}
  for (var i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      return true
    }
    map[arr[i] * 2] = true
    map[arr[i] / 2] = true
  }
  return false
};
// @lc code=end

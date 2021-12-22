/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  var map = {}
  for (var i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]] += 1
    } else {
      map[arr[i]] = 1
    }
  }
  return new Set(Object.values(map)).size === Object.keys(map).length
};
// @lc code=end

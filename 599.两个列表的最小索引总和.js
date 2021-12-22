/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  var l1 = list1.length
  var l2 = list2.length
  var result = []
  for (var i = 0; i < l1 + l2 - 1; i++) {
    result = []
    for (var j = 0; j <= i && j < l1; j++) {
      if (i - j < l2 && list1[j] === list2[i - j]) {
        result.push(list1[j])
      }
    }
    if (result.length > 0) {
      break
    }
  }
  return result
};
// @lc code=end

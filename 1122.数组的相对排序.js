/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  var arr = []
  var map = {}
  for (var i = 0; i < arr2.length; i++) {
    arr[i] = []
    map[arr2[i]] = i
  }
  var other = []
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] in map) {
      arr[map[arr1[i]]].push(arr1[i])
    } else {
      other.push(arr1[i])
    }
  }
  return [].concat(...arr, other.sort((a, b) => a - b))
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=1710 lang=javascript
 *
 * [1710] 卡车上的最大单元数
 */

// @lc code=start
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1])
  var result = 0
  var i = 0
  while (truckSize > 0 && i < boxTypes.length) {
    if (boxTypes[i][0] <= truckSize) {
      truckSize -= boxTypes[i][0]
      result += boxTypes[i][0] * boxTypes[i][1]
    } else {
      result += truckSize * boxTypes[i][1]
      truckSize = 0
    }
    i += 1
  }
  return result
};
// @lc code=end

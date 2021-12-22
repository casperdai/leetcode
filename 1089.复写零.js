/*
 * @lc app=leetcode.cn id=1089 lang=javascript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  var length = arr.length
  if (length <= 1) {
    return
  }
  var i = 0
  var count = 0
  while (true) {
    if (arr[i] === 0) {
      count += 1
    }
    if (i + count >= length - 1) {
      break
    }
    i += 1
  }
  if (count > 0) {
    var j = arr.length - 1
    if (i + count > length - 1) {
      arr[j] = arr[i--]
      j -= 1
    }
    while (j > i) {
      if (arr[i] === 0) {
        arr[j--] = 0
        count -= 1
      }
      arr[j--] = arr[i--]
    }
  }
};
// @lc code=end

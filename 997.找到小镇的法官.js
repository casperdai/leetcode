/*
 * @lc app=leetcode.cn id=997 lang=javascript
 *
 * [997] 找到小镇的法官
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  var arr = []
  for (var i = 0; i < trust.length; i++) {
    if (arr[trust[i][0]] === void 0) {
      arr[trust[i][0]] = -1
    } else {
      arr[trust[i][0]] -= 1
    }
    if (arr[trust[i][1]] === void 0) {
      arr[trust[i][1]] = 1
    } else {
      arr[trust[i][1]] += 1
    }
  }
  return N === 1 ? N : arr.findIndex(val => val === N - 1)
};
// @lc code=end

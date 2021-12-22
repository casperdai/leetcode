/*
 * @lc app=leetcode.cn id=1128 lang=javascript
 *
 * [1128] 等价多米诺骨牌对的数量
 */

// @lc code=start
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  var map = {}
  function getKey(arr) {
    if (arr[0] > arr[1]) {
      return arr[1] + '' + arr[0]
    }
    return arr[0] + '' + arr[1]
  }
  for (var i = 0; i < dominoes.length; i++) {
    var key = getKey(dominoes[i])
    if (!map[key]) {
      map[key] = 1
    } else {
      map[key] += 1
    }
  }
  return Object.keys(map).reduce((sum, val) => {
    if (map[val] > 1) {
      sum += map[val] * (map[val] - 1) / 2
    }
    return sum
  }, 0)
};
// @lc code=end

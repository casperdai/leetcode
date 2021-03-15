/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
  var map = {}
  var typeCount = 0
  var doubleCount = 0
  var more = 0
  for (var i = 0; i < candyType.length; i++) {
    if (!map[candyType[i]]) {
      map[candyType[i]] = 1
      typeCount += 1
    } else if (map[candyType[i]] === 1 ) {
      map[candyType[i]] = 2
      doubleCount += 1
    } else {
      more += 1
    }
  }
  var diff = typeCount - doubleCount
  return more >= diff ? typeCount : typeCount - (diff - more) / 2
};
// @lc code=end

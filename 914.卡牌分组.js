/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  if (deck.length < 2) {
    return false
  }
  var map = {}
  for (var i = 0; i < deck.length; i++) {
    if (!map[deck[i]]) {
      map[deck[i]] = 0
    }
    map[deck[i]] += 1
  }
  function gcd (x, y) {
    if (x === y) {
      return x
    }
    if (x > y) {
      return gcd(y, x)
    }
    return x === 0 ? y : gcd(y % x, x)
  }
  var keys = Object.keys(map)
  var g = map[keys[0]]
  for (var i = 1; i < keys.length; i++) {
    g = gcd(g, map[keys[i]])
  }
  return g >= 2
};
// @lc code=end

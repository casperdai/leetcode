/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  var result = []
  for (var i = 1; i <= n; i++) {
    var s = ''
    if (i % 3 === 0) {
      s += 'Fizz'
    }
    if (i % 5 === 0) {
      s += 'Buzz'
    }
    result.push(s || '' + i)
  }
  return result
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  var map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  if (digits.length === 0) {
    return []
  }
  if (digits.length === 1) {
    return map[digits]
  }
  var result = []
  function join (i, imax, t) {
    var arr = map[digits[i]]
    for (var j = 0; j < arr.length; j++) {
      if (i === imax) {
        result.push(t + arr[j])
      } else {
        join(i + 1, imax, t + arr[j])
      }
    }
  }
  join(0, digits.length - 1, '')
  return result
};
// @lc code=end

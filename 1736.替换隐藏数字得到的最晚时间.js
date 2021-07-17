/*
 * @lc app=leetcode.cn id=1736 lang=javascript
 *
 * [1736] 替换隐藏数字得到的最晚时间
 */

// @lc code=start
/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
  var s = ''
  for (var i = 0; i < time.length; i++) {
    if (time[i] === '?') {
      switch (i) {
        case 0:
          if (time[1] === '?' || Number(time[1]) < 4) {
            s += '2'
          } else {
            s += '1'
          }
          break
        case 1:
          if (Number(s[0]) === 2) {
            s += '3'
          } else {
            s += '9'
          }
          break
        case 3:
          s += '5'
          break
        case 4:
          s += '9'
          break
        default:
          break
      }
    } else {
      s += time[i]
    }
  }
  return s
};
// @lc code=end

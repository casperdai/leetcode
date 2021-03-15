/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  var afull = false
  var pcount = 0
  for (var i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'A':
        if (afull) {
          return false
        } else {
          afull = true
        }
        pcount = 0
        break
      case 'L':
        if (pcount === 2) {
          return false
        } else {
          pcount += 1
        }
        break
      default:
        pcount = 0
        break
    }
  }
  return true
};
// @lc code=end

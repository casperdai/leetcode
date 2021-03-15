/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */

// @lc code=start
function find (total, choose, curr, hour, minute, val, result) {
  if (hour > 11 || minute > 59) {
    return;
  }
  if (total === choose) {
    result.push(`${ hour }:${ minute >= 10 ? minute : '0' + minute }`);
  } else {
    var need = total - choose;
    var has = val.length - curr;
    if (need <= has) {
      if (need < has) {
        find(total, choose, curr + 1, hour, minute, val, result);
      }
      if (curr <= 3) {
        hour += val[curr];
      } else {
        minute += val[curr];
      }
      find(total, choose + 1, curr + 1, hour, minute, val, result);
    }
  }
}
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  if (num > 8) {
    return []
  }
  var result = [];
  find(num, 0, 0, 0, 0, [8, 4, 2, 1, 32, 16, 8, 4, 2, 1], result);
  return result;
};
// @lc code=end

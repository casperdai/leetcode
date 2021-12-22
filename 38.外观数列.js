/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  var count = 2;
  var desc = '1';
  while (count <= n) {
    var slow = 0;
    var fast = 0;
    var len = desc.length;
    var pre = desc[0];
    var d = '';
    while (fast <= len) {
      if (pre !== desc[fast]) {
        d += (fast - slow) + pre;
        slow = fast;
        pre = desc[fast];
      }
      fast += 1;
    }
    desc = d;
    count += 1;
  }
  return desc;
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=1629 lang=javascript
 *
 * [1629] 按键持续时间最长的键
 */

// @lc code=start
/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
  var key = keysPressed[0]
  var time = releaseTimes[0]
  for (var i = 1; i < releaseTimes.length; i++) {
    var t = releaseTimes[i] - releaseTimes[i - 1]
    if (t > time) {
      key = keysPressed[i]
      time = t
    } else if (t === time ) {
      if (keysPressed[i] > key) {
        key = keysPressed[i]
      }
    }
  }
  return key
};
// @lc code=end

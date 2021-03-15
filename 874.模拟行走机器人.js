/*
 * @lc app=leetcode.cn id=874 lang=javascript
 *
 * [874] 模拟行走机器人
 */

// @lc code=start
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  var x = 0
  var y = 0
  var dx = [0, 1, 0, -1]
  var dy = [1, 0, -1, 0]
  var d = 0
  var map = {}
  for (var i = 0; i < obstacles.length; i++) {
    map[obstacles[i][0] + ':' + obstacles[i][1]] = true
  }
  var result = 0
  for (var i = 0; i < commands.length; i++) {
    if (commands[i] === -2) {
      d = (d + 3) % 4
    } else if (commands[i] === -1) {
      d = (d + 1) % 4
    } else {
      for (var j = 0 ; j < commands[i]; j++) {
        var nextx = x + dx[d]
        var nexty = y + dy[d]
        if (map[nextx + ':' + nexty]) {
          break
        }
        x = nextx
        y = nexty
        result = Math.max(result, x * x + y * y)
      }
    }
  }
  return result
};
// @lc code=end

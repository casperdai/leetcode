/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// @lc code=start

var RecentCounter = function() {
  this.arr = []
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  if (this.arr.length > 0) {
    var min = t - 3000
    var i = this.arr.length - 1;
    for (; i >= 0; i--) {
      if (this.arr[i] < min) {
        break
      }
    }
    if (~i) {
      this.arr = this.arr.slice(i + 1)
    }
  }
  this.arr.push(t)
  return this.arr.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

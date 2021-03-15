/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this._data = [];
  this._total = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this._data.push({
    val: x,
    min: this._total === 0 ? x : Math.min(this._data[this._total - 1].min, x)
  });
  this._total += 1;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this._total > 0) {
    this._data.pop();
    this._total -= 1;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this._total === 0 ? null : this._data[this._total - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this._total === 0 ? null : this._data[this._total - 1].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this._data1 = [];
  this._data2 = [];
  this._f = true;
  this._top = null;
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  var queue = this._f ? this._data1 : this._data2;
  queue.push(x);
  this._top = x;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  var queue1 = this._f ? this._data1 : this._data2;
  var queue2 = this._f ? this._data2 : this._data1;
  var length = queue1.length;
  this._top = null;
  this._f = !this._f;
  for (var i = 0; i < length - 1; i++) {
    if (i === length - 2) {
      this._top = queue1.shift();
      queue2.push(this._top);
    } else {
      queue2.push(queue1.shift());
    }
  }
  return queue1.shift()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this._top;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  var queue = this._f ? this._data1 : this._data2;
  return queue.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

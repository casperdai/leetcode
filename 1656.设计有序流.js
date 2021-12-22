/*
 * @lc app=leetcode.cn id=1656 lang=javascript
 *
 * [1656] 设计有序流
 */

// @lc code=start
/**
 * @param {number} n
 */
var OrderedStream = function(n) {
  this.data = []
  this.pre = 1
};

/**
 * @param {number} id
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(id, value) {
  this.data[id] = value
  if (this.pre === id) {
    var result = [value]
    this.pre += 1
    while (this.data[this.pre]) {
      result.push(this.data[this.pre])
      this.pre += 1
    }
    return result
  }
  return []
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */
// @lc code=end

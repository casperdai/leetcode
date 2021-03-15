/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k
  this.nums = nums.sort((a, b) => b - a)
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  var find = false
  for (var i = 0; i < this.k; i++) {
    if (this.nums[i] <= val) {
      find = true
      this.nums.splice(i, 0, val)
      break
    }
  }
  if (!find) {
    this.nums.push(val)
  }
  if (this.nums.length > this.k) {
    this.nums.length = this.k
  }
  return this.nums[this.k - 1]
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

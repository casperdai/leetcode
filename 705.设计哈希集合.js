/*
 * @lc app=leetcode.cn id=705 lang=javascript
 *
 * [705] 设计哈希集合
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  this.data = []
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  var mod = key % 769
  if (this.data[mod]) {
    for (var i = 0; i < this.data[mod].length; i++) {
      if (this.data[mod][i] === key) {
        return
      }
    }
    this.data[mod].push(key)
  } else {
    this.data[mod] = [key]
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  var mod = key % 769
  if (this.data[mod]) {
    for (var i = 0; i < this.data[mod].length; i++) {
      if (this.data[mod][i] === key) {
        this.data[mod].splice(i, 1)
        return
      }
    }
  }
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  var mod = key % 769
  if (this.data[mod]) {
    for (var i = 0; i < this.data[mod].length; i++) {
      if (this.data[mod][i] === key) {
        return true
      }
    }
  }
  return false
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end

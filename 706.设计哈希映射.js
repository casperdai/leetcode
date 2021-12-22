/*
 * @lc app=leetcode.cn id=706 lang=javascript
 *
 * [706] 设计哈希映射
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
  this.data = []
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  var mod = key % 2069
  if (this.data[mod]) {
    for (var i = 0; i < this.data[mod].length; i++) {
      if (this.data[mod][i][0] === key) {
        this.data[mod][i][1] = value
        return
      }
    }
    this.data[mod].push([key, value])
  } else {
    this.data[mod] = [[key, value]]
  }
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  var mod = key % 2069
  if (this.data[mod]) {
    for (var i = 0; i < this.data[mod].length; i++) {
      if (this.data[mod][i][0] === key) {
        return this.data[mod][i][1]
      }
    }
  }
  return -1
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  var mod = key % 2069
  if (this.data[mod]) {
    for (var i = 0; i < this.data[mod].length; i++) {
      if (this.data[mod][i][0] === key) {
        this.data[mod].splice(i, 1)
        return
      }
    }
  }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end

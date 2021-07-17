/*
 * @lc app=leetcode.cn id=1773 lang=javascript
 *
 * [1773] 统计匹配检索规则的物品数量
 */

// @lc code=start
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
  var index = ['type', 'color', 'name'].indexOf(ruleKey)
  return items.filter(v => v[index] === ruleValue).length
};
// @lc code=end

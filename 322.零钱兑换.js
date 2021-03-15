/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
function find (coins, amount, cache) {
  if (amount === 0) {
    return 0;
  }
  if (amount in cache) {
    return cache[amount];
  }
  var count = -1;
  var temp;
  for (var i = 0; i < coins.length; i++) {
    if (coins[i] <= amount) {
      temp = find(coins, amount - coins[i], cache) + 1;
      if (temp > 0) {
        count = count === -1 ? temp : Math.min(count, temp);
      }
    } else {
      continue;
    }
  }
  cache[amount] = count;
  return count;
}
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  return find(coins, amount, {});
};
// @lc code=end

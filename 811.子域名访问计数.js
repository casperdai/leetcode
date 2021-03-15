/*
 * @lc app=leetcode.cn id=811 lang=javascript
 *
 * [811] 子域名访问计数
 */

// @lc code=start
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  var map = {}
  for (var i = 0; i < cpdomains.length; i++) {
    var all = cpdomains[i].split(' ')
    var count = Number(all[0])
    var domains = all[1].split('.')
    var domain = ''
    for (var j = domains.length - 1; j >= 0; j--) {
      if (domain === '') {
        domain = domains[j]
      } else {
        domain = domains[j] + '.' + domain
      }
      if (map[domain]) {
        map[domain] += count
      } else {
        map[domain] = count
      }
    }
  }
  return Object.keys(map).map(key => `${ map[key] } ${ key }`)
};
// @lc code=end

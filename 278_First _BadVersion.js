/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  console.log(isBadVersion);
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 0;
    let right = n;
    let ret = 0;
    while (left <= right) {
      let mid = Math.floor((right + left) / 2);
      console.log(mid);
      if (!isBadVersion(mid)) {
        left = mid + 1;
      } else {
        ret = mid;
        right = mid - 1;
      }
    }
    return ret;
  };
};

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    let sum = 0;
    let j = i;
    while (j > 0) {
      sum += Math.floor(j % 2);
      j = Math.floor(j / 2);
    }
    arr.push(sum);
  }
  return arr;
};

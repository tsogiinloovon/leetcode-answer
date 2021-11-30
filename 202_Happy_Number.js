/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let sumSq = n;
  while (sumSq > 4) {
    sumSq = 0;
    while (n > 0) {
      let a = n % 10;
      sumSq += a * a;
      n = Math.floor(n / 10);
    }
    n = sumSq;
  }
  return sumSq == 1;
};

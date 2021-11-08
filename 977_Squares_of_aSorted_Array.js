/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  return nums
    .map((ele) => {
      // transform the given array
      return ele * ele; //square the element
    })
    .sort((a, b) => {
      return a - b; // sort by ascending order
    });
};

//[(10, 5, 2, 6)];

//[10] [10,5] [5] [5,2] [5,2,6] [2,6] [6]
const PSubArrLessThanK = (nums, k) => {
  if (k <= 1) return 0;

  let left = 0;
  let right = 0;
  let count = 0;
  let product = 1;

  while (right < nums.length) {
    // when right(4)== nums.length(4), end
    product *= nums[right]; // 10*1

    while (product >= k) {
      // [10,5,2] = 100 -> 100/2= 50
      product /= nums[left++];
    }

    count += Math.max(0, right - left + 1);
    console.log(nums.slice(left, right), "count:", count);
    right++;
  }
  return count;
};

console.log("hariu:", PSubArrLessThanK([10, 5, 2, 6], 100));

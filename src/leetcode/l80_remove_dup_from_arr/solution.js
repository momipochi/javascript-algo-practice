//https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/

const solution = (nums = []) => {
  if (nums.length <= 2) return nums.length;

  let k = 2;
  for (let i = k; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1] || nums[i] !== nums[k - 2]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

module.exports = { solution };

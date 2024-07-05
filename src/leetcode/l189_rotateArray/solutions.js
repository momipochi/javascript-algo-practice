//https://leetcode.com/problems/rotate-array/description/

const solution = (nums = [], k) => {
  for (let i = 0; i < k; i++) {
    let tail = nums[nums.length - 1],
      tmp = nums[0];
    nums[0] = tail;
    for (let j = 1; j < nums.length; j++) {
      let t = nums[j];
      nums[j] = tmp;
      tmp = t;
    }
  }
};

const fasterSolution = (nums = [], k = 0) => {
  if (k >= nums.length) k %= nums.length;
  nums.unshift(...nums.splice(nums.length - k));
};

module.exports = { solution };

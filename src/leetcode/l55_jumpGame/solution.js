const solution = (nums = []) => {
  let goal = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= goal) goal--;
  }
  return goal === 0;
};

module.exports = { solution };

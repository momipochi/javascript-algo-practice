const solution = (target = 0, nums = []) => {
  let min = Number.MAX_SAFE_INTEGER,
    left = 0,
    right = 0,
    sum = 0;
  while (right < nums.length) {
    sum += nums[right];
    while (sum >= target) {
      min = Math.min(min, right - left + 1);
      sum -= nums[left];
      left++;
    }
    right++;
  }

  return min;
};

module.exports = { solution };

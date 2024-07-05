//https://leetcode.com/problems/subsets/description/

const subsets = (nums) => {
  const res = [];
  const rec = (path, ind) => {
    res.push([...path]);
    for (let i = ind; i < nums.length; i++) {
      path.push(nums[i]);
      rec(path, i + 1);
      path.pop();
    }
  };
  rec([], 0);
  return res;
};

module.exports = { subsets };

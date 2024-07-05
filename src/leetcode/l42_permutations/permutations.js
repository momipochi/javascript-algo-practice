const permutation = (nums) => {
  const used = Array(nums.length).fill(false),
    res = [];
  const rec = (perm) => {
    if (perm.length === nums.length) {
      res.push([...perm]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        used[i] = true;
        perm.push(nums[i]);
        rec(perm, res);
        used[i] = false;
        perm.pop();
      }
    }
  };
  rec([]);
  return res;
};

module.exports = { permutation };

// https://leetcode.com/problems/jump-game-ii/?envType=study-plan-v2&envId=top-interview-150

const sol = (nums = []) => {
  let min = 0,
    far = 0,
    near = 0;
  while (far < nums.length - 1) {
    let furtherest = 0;
    for (let j = near; j <= far; j++) {
      furtherest = Math.max(furtherest, j + nums[j]);
    }
    near = far + 1;
    far = furtherest;
    min++;
  }

  return min;
};

const solution = (nums = []) => {
  let min = 0,
    far = 0,
    near = 0;

  while (far < nums.length - 1) {
    let furthest = 0;
    for (let j = near; j <= far; j++) {
      furthest = Math.max(furthest, j + nums[j]);
    }
    near = far + 1;
    far = furthest;
    min++;
  }
  return min;
};

module.exports = { solution };

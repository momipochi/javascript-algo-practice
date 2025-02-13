// https://leetcode.com/problems/rotate-array/?envType=study-plan-v2&envId=top-interview-150

const solution = (prices = []) => {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
  }
  return profit;
};

module.exports = { solution };

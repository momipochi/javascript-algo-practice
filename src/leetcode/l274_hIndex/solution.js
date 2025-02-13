// https://leetcode.com/problems/h-index/?envType=study-plan-v2&envId=top-interview-150

const solution = (citations = []) => {
  citations.sort((a, b) => a - b);
  let h = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= citations.length - i) h++;
  }
  return h;
};

module.exports = { solution };

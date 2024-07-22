const frequencyOfMaxValue = (number = [], q = []) => {
  let res = [];
  for (let i = 0; i < q.length; i++) {
    let tmp = number.slice(q[i] - 1, number.length);
    let max = Math.max.apply(null, tmp),
      count = 0;

    for (let j = q[i] - 1; j < number.length; j++) {
      if (number[j] === max) {
        count++;
      }
    }
    res.push(count);
  }
  return res;
};

module.exports = { frequencyOfMaxValue };

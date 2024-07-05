const isSameArray = (a, b) => {
  if (a.length !== b.length) return false;
  a.sort();
  b.sort();

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};
const flatten2DArray = (arr) => {
  return arr.reduce((acc, val) => acc.concat(val), []);
};

module.exports = { isSameArray, flatten2DArray };

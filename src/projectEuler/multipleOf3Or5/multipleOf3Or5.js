const multipleOf3Or5 = () => {
  let res = 0;
  for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) res += i;
  }
  console.log(res);
  return res;
};

module.exports = { multipleOf3Or5 };

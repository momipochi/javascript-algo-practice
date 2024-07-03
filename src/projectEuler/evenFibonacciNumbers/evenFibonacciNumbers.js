const evenFibonacciNumbers = () => {
  let res = 0,
    prevL = 0,
    prevR = 1;

  let i = prevL + prevR;
  while (i <= 4000000) {
    if (i % 2 == 0) {
      res += i;
    }

    prevL = prevR;
    prevR = i;
    i = prevL + prevR;
  }
  return res;
};

module.exports = { evenFibonacciNumbers };

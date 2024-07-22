const { frequencyOfMaxValue } = require("./frequencyOfMaxValue");
const { isSameArray } = require("../../utils/utils");

test("should return array of occurence of max values in array", () => {
  let n = [5, 4, 5, 3, 2],
    q = [1, 2, 3, 4, 5];
  let ans = [2, 1, 1, 1, 1];
  expect(isSameArray(frequencyOfMaxValue(n, q), ans)).toBe(true);
});

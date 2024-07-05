const { solution } = require("./solutions");

test("should rotate array in place", () => {
  const kaseNums = [1, 2, 3, 4, 5, 6, 7],
    ansNums = [5, 6, 7, 1, 2, 3, 4],
    kaseK = 3;
  solution(kaseNums, kaseK);
  expect(kaseNums).toEqual(ansNums);
});

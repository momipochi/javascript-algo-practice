const { solution } = require("./solution");

test("should return minmum size of subarray sum", () => {
  expect(solution(7, [2, 3, 1, 2, 4, 3])).toBe(2);
});

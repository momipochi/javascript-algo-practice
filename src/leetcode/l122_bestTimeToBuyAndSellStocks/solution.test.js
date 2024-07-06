const { solution } = require("./solution");

test("should return maximum profit from best time to buy and sell stocks", () => {
  expect(solution([7, 1, 5, 3, 6, 4])).toBe(7);
});

const { solution } = require("./solution");

test("should return researcher's h-index", () => {
  expect(solution([3, 0, 6, 1, 5])).toBe(3);
});

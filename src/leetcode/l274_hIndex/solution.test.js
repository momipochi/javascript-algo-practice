const { solution } = require("./solution");

test("should return researcher's h-index", () => {
  expect(solution([3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(3);
});

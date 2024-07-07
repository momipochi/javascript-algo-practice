const { solution } = require("./solution");

test("should return minimum jumps required to reach n-1", () => {
  expect(solution([2, 3, 1, 1, 4])).toBe(2);
});

const { solution } = require("./solution");

test("should remove duplicates from array", () => {
  const kase = [1, 1, 1, 2, 2, 3],
    ans = 5;
  expect(solution(kase)).toBe(5);
});

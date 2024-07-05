const { subsets } = require("./subsets");
const { isSameArray, flatten2DArray } = require("../../utils/utils");

test("should return all subsets", () => {
  const kase = [1, 2, 3],
    ans = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]];
  expect(isSameArray(flatten2DArray(ans), flatten2DArray(subsets(kase)))).toBe(
    true
  );
});

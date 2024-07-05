const { permutation } = require("./permutations");
const { isSameArray, flatten2DArray } = require("../../utils/utils");

test("should return all permutations", () => {
  const kase = [1, 2, 3],
    ans = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ];

  expect(
    isSameArray(flatten2DArray(ans), flatten2DArray(permutation(kase)))
  ).toBe(true);
});

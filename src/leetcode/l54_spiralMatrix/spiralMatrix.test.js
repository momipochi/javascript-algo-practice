const { isSameArray } = require("../../utils/utils");
const { spiralMatrix } = require("./spiralMatrix");

test("should return all elements of the matrix in spiral order", () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const ans = [1, 2, 3, 6, 9, 8, 7, 4, 5];

  expect(isSameArray(spiralMatrix(matrix), ans)).toBe(true);
});

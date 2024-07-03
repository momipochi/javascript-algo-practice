const { multipleOf3Or5 } = require("./multipleOf3Or5");

test("should return multiple of 3 or 5 up to 1000", () => {
  expect(multipleOf3Or5()).toBe(233168);
});

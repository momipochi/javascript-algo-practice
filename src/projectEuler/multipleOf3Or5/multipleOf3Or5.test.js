const { multipleOf3Or5 } = require("./multipleOf3Or5");

test("should", () => {
  expect(multipleOf3Or5()).toBe(233168);
});

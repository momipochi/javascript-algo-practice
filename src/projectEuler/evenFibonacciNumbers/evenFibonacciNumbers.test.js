const { evenFibonacciNumbers } = require("./evenFibonacciNumbers");

test("should", () => {
  expect(evenFibonacciNumbers()).toBe(4613732);
});

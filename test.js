const { sum, fromDollarToYen } = require("./app.js");

test("adds 14 + 9 to equal 23,", () => {
  let total = sum(14, 9);
  expect(total).toBe(23);
});

test("10 Euro should be 12 Dollars", function () {
  //import the function from app.js
  const { fromEuroToDollar } = require("./app.js");
  let total = fromEuroToDollar(10);
  let expected = 10 * 1.2;
  expect(total).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});
test("10 Dollars should be .09 Yen", function () {
  const { fromDollarToYen } = require("./app.js");
  let total = fromDollarToYen(10);
  let expected = (10 * 127.9) / 1.2;
  expect(total).toBe(expected);
});
test("10 Yen should be .06 Pounds, or less than one Pence", function () {
  const { fromYenToPound } = require("./app.js");
  let total = fromYenToPound(10);
  let expected = (10 * 0.8) / 127.9;
  expect(total).toBe(expected);
});

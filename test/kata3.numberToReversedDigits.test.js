const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toBe[5,4,3,2,1]
    expect(numberToReversedDigits(56789)).toBe[9,9,7,6,5]
  });
});
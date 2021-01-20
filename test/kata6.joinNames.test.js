const { joinNames } = require("../src");

const theSimpsons = [{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }];
const dogs = [
  { name: "Louie" },
  { name: "Maisy" },
  { name: "MooMoo" },
  { name: "MooLou" },
  { name: "LouLou" },
];

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames(theSimpsons)).toStrictEqual("Bart, Lisa & Maggie");
    expect(joinNames(dogs)).toStrictEqual(
      "Louie, Maisy, MooMoo, MooLou & LouLou"
    );
  });
});

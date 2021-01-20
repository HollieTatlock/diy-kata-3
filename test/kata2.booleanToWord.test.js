const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("When BooleanToWord is passed true it returns yes" , () => {
    expect(booleanToWord(true)).toBe("Yes")
  })

  test("WhenBooleanWord is passed false it returns no" , () => {
    expect(booleanToWord(false)).toBe("No")
  })

  // how do we create specs again???
});

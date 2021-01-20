const { getEmployerRole } = require("../src");

employees = [
  {
    name: "Hollie",
    role: "Centre Manager"
  }, {
    name: "Alex",
    role: "Watersports Duty Manager"
  }, {
    name: "William",
    role: "Watersports Duty Manager"
  }, {
    name: "Matt",
    role: "Watersports Instructor"
  }
]
describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    expect(getEmployerRole("Alex", employees)).toBe("Watersports Duty Manager");
    expect(getEmployerRole("Hollie", employees)).toBe("Centre Manager");
    expect(getEmployerRole("Matt", employees)).toBe("Watersports Instructor");



  });
});

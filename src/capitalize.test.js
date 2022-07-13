const capitalize = require("./capitalize");

test("capitalize string test", () => {
  expect(capitalize("prova")).toBe("Prova");
});

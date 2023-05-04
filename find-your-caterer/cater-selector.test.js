const selector = require("./cater-selector");

describe("cater-selector", () => {
  it("returns -1 when budget is under 15", () => {
    expect(selector(10, 4)).toEqual(-1);
  });
});

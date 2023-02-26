const { transform } = require("@babel/core");
const plugin = require("./index.js");

describe("adds line information to console.log statements", () => {
  test("single console.log", () => {
    const code = `console.log("hello");`;
    const expected = `console.log("(line:1)", "hello");`;

    const result = transform(code, { plugins: [plugin] });
    expect(result.code).toBe(expected);
  });

  test("multiple console.logs", () => {
    const code = `
        console.log("lorem");
        console.log("ipsum");
    `;
    const expected = `
        console.log("(line:2)", "lorem");
        console.log("(line:3)", "ipsum");
    `.replace(/^\s+|\s+$/gm, "");

    const result = transform(code, { plugins: [plugin] });
    expect(result.code).toContain(expected);
  });
});

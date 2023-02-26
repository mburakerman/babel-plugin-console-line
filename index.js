module.exports = function (babel) {
  return {
    visitor: {
      CallExpression(path) {
        const callee = path.node.callee;

        if (
          callee.object &&
          callee.object.name === "console" &&
          callee.property &&
          callee.property.name === "log"
        ) {
          const { line } = path.node.loc.start;
          const { arguments: nodeArguments } = path.node;

          nodeArguments.unshift({
            type: "StringLiteral",
            value: `(line:${line})`,
          });
        }
      },
    },
  };
};

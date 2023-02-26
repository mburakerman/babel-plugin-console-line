module.exports = function (babel) {
  const { types: t } = babel;

  return {
    visitor: {
      CallExpression(path) {
        const callee = path.node.callee;

        if (
          callee.object &&
          callee.object.name === 'console' &&
          callee.property &&
          callee.property.name === 'log'
        ) {
          const { line } = path.node.loc.start;
          console.log('line', line);

          const { arguments: nodeArguments } = path.node;
          const newNodeArgument =
            nodeArguments && Object.create(nodeArguments[0]); // used object create to not change original object
          newNodeArgument.value = `(line:${line})`;
          newNodeArgument.type = 'StringLiteral';
          nodeArguments.unshift(newNodeArgument);
        }
      },
    },
  };
};

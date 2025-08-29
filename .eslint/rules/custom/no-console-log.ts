export default {
  meta: {
    type: "problem",
    docs: {
      description: "Запрещает использование console.log",
    },
    schema: [],
    messages: {
      noConsoleLog: "Использование console.log запрещено!",
    },
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.object?.name === "console" &&
          node.callee.property?.name === "log"
        ) {
          context.report({
            node,
            messageId: "noConsoleLog",
          });
        }
      },
    };
  },
};

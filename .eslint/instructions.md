# Как добавить новое правило ESLint

1. Перейди в папку `.eslint/rules/custom/`
2. Создай файл, например `my-rule.ts`:

```ts
export default {
  meta: {
    type: 'problem', // problem | suggestion | layout
    docs: {
      description: 'Короткое описание правила',
    },
    schema: [],
    messages: {
      customMessage: 'Текст ошибки',
    },
  },
  create(context) {
    return {
      Identifier(node) {
        if (node.name === 'foo') {
          context.report({ node, messageId: 'customMessage' });
        }
      },
    };
  },
};
```

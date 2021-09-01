module.exports = {
  rules: {
    // Enforce `for` loop update clause moving the counter in the right direction.
    'for-direction': 'error',
    // Enforce `return` statements in getters.
    'getter-return': ['error', { allowImplicit: true }],
    // Disallow using an async function as a Promise executor.
    'no-async-promise-executor': 'error',
    // Disallow `await` inside of loops.
    'no-await-in-loop': 'error',
    // Disallow comparing against -0.
    'no-compare-neg-zero': 'error',
    // Disallow assignment operators in conditional expressions.
    'no-cond-assign': 'error',
    // Disallow the use of `console`.
    'no-console': 'warn',
    // Disallow constant expressions in conditions.
    'no-constant-condition': 'warn',
    // Disallow control characters in regular expressions.
    'no-control-regex': 'error',
    // Disallow the use of `debugger`.
    'no-debugger': 'error',
    // Disallow duplicate arguments in `function` definitions.
    'no-dupe-args': 'error',
    // Disallow duplicate conditions in if-else-if chains.
    'no-dupe-else-if': 'off',
    // Disallow duplicate keys in object literals.
    'no-dupe-keys': 'error',
    // disallow duplicate case labels.
    'no-duplicate-case': 'error',
    // Disallow empty block statements.
    'no-empty': 'warn',
    // Disallow empty character classes in regular expressions.
    'no-empty-character-class': 'error',
    // Disallow reassigning exceptions in `catch` clauses.
    'no-ex-assign': 'error',
    // Disallow unnecessary boolean casts.
    'no-extra-boolean-cast': 'error',
    // Disallow unnecessary parentheses.
    'no-extra-parens': 'off',
    // Disallow unnecessary semicolons.
    'no-extra-semi': 'error',
    // Disallow reassigning `function` declarations.
    'no-func-assign': 'error',
    // Disallow assigning to imported bindings.
    'no-import-assign': 'off',
    // Disallow variable or `function` declarations in nested blocks.
    'no-inner-declarations': 'error',
    // Disallow invalid regular expression strings in `RegExp` constructors.
    'no-invalid-regexp': 'error',
    // Disallow irregular whitespace.
    'no-irregular-whitespace': 'error',
    // Disallow literal numbers that lose precision.
    'no-loss-of-precision': 'off',
    // Disallow characters which are made with multiple code points in character class syntax.
    'no-misleading-character-class': 'error',
    // Disallow calling global object properties as functions.
    'no-obj-calls': 'error',
    // Disallow returning values from Promise executor functions.
    'no-promise-executor-return': 'off',
    // Disallow calling some `Object.prototype` methods directly on objects.
    'no-prototype-builtins': 'error',
    // Disallow multiple spaces in regular expressions.
    'no-regex-spaces': 'error',
    // Disallow returning values from setters.
    'no-setter-return': 'off',
    // Disallow sparse arrays.
    'no-sparse-arrays': 'error',
    // Disallow template literal placeholder syntax in regular strings.
    'no-template-curly-in-string': 'error',
    // Disallow confusing multiline expressions.
    'no-unexpected-multiline': 'error',
    // Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements.
    'no-unreachable': 'error',
    // Disallow loops with a body that allows only one iteration.
    'no-unreachable-loop': 'off',
    // Disallow control flow statements in `finally` blocks.
    'no-unsafe-finally': 'error',
    // Disallow negating the left operand of relational operators.
    'no-unsafe-negation': 'error',
    // Disallow use of optional chaining in contexts where the `undefined` value is not allowed.
    'no-unsafe-optional-chaining': 'off',
    // Disallow useless backreferences in regular expressions.
    'no-useless-backreference': 'off',
    // Disallow assignments that can lead to race conditions due to usage of `await` or `yield`.
    'require-atomic-updates': 'off',
    // Require calls to `isNaN()` when checking for `NaN`.
    'use-isnan': 'error',
    // Enforce comparing `typeof` expressions against valid strings.
    'valid-typeof': ['error', { requireStringLiterals: true }],
  },
};

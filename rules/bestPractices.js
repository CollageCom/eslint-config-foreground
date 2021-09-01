

module.exports = {
  rules: {
    // Enforce getter and setter pairs in objects and classes.
    'accessor-pairs': 'off',
    // Enforce `return` statements in callbacks of array methods.
    'array-callback-return': 'warn',
    // Enforce the use of variables within the scope they are defined.
    'block-scoped-var': 'error',
    // Enforce that class methods utilize `this`.
    'class-methods-use-this': ['error', { exceptMethods: [] }],
    // Enforce a maximum cyclomatic complexity allowed in a program.
    'complexity': 'off',
    // Require `return` statements to either always or never specify values.
    "consistent-return": 'warn',
    // Enforce consistent brace style for all control statements.
    'curly': ['error', 'multi-line'],
    // Require `default` cases in `switch` statements.
    'default-case': 'off',
    // Enforce default clauses in switch statements to be last.
    'default-case-last': 'off',
    // Enforce default parameters to be last.
    'default-param-last': 'off',
    // Enforce consistent newlines before and after dots.
    'dot-location': ['error', 'property'],
    // Enforce dot notation whenever possible.
    'dot-notation': ['error', { allowKeywords: true }],
    // Require the use of `===` and `!==`.
    'eqeqeq': 'warn',
    // Require grouped accessor pairs in object literals and classes.
    'grouped-accessor-pairs': 'off',
    // Require `for-in` loops to include an `if` statement.
    'guard-for-in': 'warn',
    // Enforce a maximum number of classes per file.
    'max-classes-per-file': ['error', 1],
    // Disallow the use of `alert`, `confirm`, and `prompt`.
    'no-alert': 'warn',
    // Disallow the use of `arguments.caller` or `arguments.callee`.
    'no-caller': 'error',
    // Disallow lexical declarations in case clauses.
    'no-case-declarations': 'error',
    // Disallow returning value from constructor.
    'no-constructor-return': 'off',
    // Disallow division operators explicitly at the beginning of regular expressions.
    'no-div-regex': 'off',
    // Disallow `else` blocks after `return` statements in `if` statements.
    'no-else-return': 'off',
    // Disallow empty functions.
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
        'constructors',
      ]
    }],
    // Disallow empty destructuring patterns.
    'no-empty-pattern': 'error',
    // Disallow `null` comparisons without type-checking operators.
    'no-eq-null': 'off',
    // Disallow the use of `eval()`.
    'no-eval': 'error',
    // Disallow extending native types.
    'no-extend-native': 'error',
    // Disallow unnecessary calls to `.bind()`.
    'no-extra-bind': 'error',
    // Disallow unnecessary labels.
    'no-extra-label': 'error',
    // Disallow fallthrough of `case` statements.
    'no-fallthrough': 'error',
    // Disallow leading or trailing decimal points in numeric literals.
    'no-floating-decimal': 'error',
    // Disallow assignments to native objects or read-only global variables.
    'no-global-assign': ['error', { exceptions: [] }],
    // Disallow shorthand type conversions.
    'no-implicit-coercion': 'off',
    // Disallow declarations in the global scope.
    'no-implicit-globals': 'off',
    // Disallow the use of `eval()`-like methods.
    'no-implied-eval': 'error',
    // Disallow `this` keywords outside of classes or class-like objects.
    'no-invalid-this': 'off',
    // Disallow the use of the `__iterator__` property.
    'no-iterator': 'error',
    // Disallow labeled statements.
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    // Disallow unnecessary nested blocks.
    'no-lone-blocks': 'warn',
    // Disallow function declarations that contain unsafe references inside loop statements.
    'no-loop-func': 'error',
    // Disallow magic numbers.
    'no-magic-numbers': 'off',
    // Disallow multiple spaces.
    'no-multi-spaces': ['error', { ignoreEOLComments: false }],
    // Disallow multiline strings.
    'no-multi-str': 'error',
    // Disallow `new` operators outside of assignments or comparisons.
    'no-new': 'error',
    // Disallow `new` operators with the `Function` object.
    'no-new-func': 'error',
    // Disallow `new` operators with the `String`, `Number`, and `Boolean` objects.
    'no-new-wrappers': 'error',
    // Disallow `\8` and `\9` escape sequences in string literals.
    'no-nonoctal-decimal-escape': 'off',
    // Disallow octal literals.
    'no-octal': 'error',
    // Disallow octal escape sequences in string literals.
    'no-octal-escape': 'error',
    // Disallow reassigning `function` parameters.
    'no-param-reassign': ['warn', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc',
        'e',
        'ctx',
        'context',
        'req',
        'request',
        'res',
        'response',
        '$scope',
        'self',
      ],
    }],
    // Disallow the use of the `__proto__` property.
    'no-proto': 'error',
    // Disallow variable redeclaration.
    'no-redeclare': 'error',
    // Disallow certain properties on certain objects.
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],
    // Disallow assignment operators in `return` statements.
    'no-return-assign': ['error', 'always'],
    // Disallow unnecessary `return await`.
    'no-return-await': 'error',
    // Disallow `javascript:` urls.
    'no-script-url': 'error',
    // Disallow assignments where both sides are exactly the same.
    'no-self-assign': ['error', { props: true }],
    // Disallow comparisons where both sides are exactly the same.
    'no-self-compare': 'warn',
    // Disallow comma operators.
    'no-sequences': 'error',
    // Disallow throwing literals as exceptions.
    'no-throw-literal': 'error',
    // Disallow unmodified loop conditions.
    'no-unmodified-loop-condition': 'off',
    // Disallow unused expressions.
    'no-unused-expressions': 'off',
    // Disallow unused labels.
    'no-unused-labels': 'error',
    // Disallow unnecessary calls to `.call()` and `.apply()`.
    'no-useless-call': 'error',
    // Disallow unnecessary `catch` clauses.
    'no-useless-catch': 'error',
    // Disallow unnecessary concatenation of literals or template literals.
    'no-useless-concat': 'error',
    // Disallow unnecessary escape characters.
    'no-useless-escape': 'warn',
    // Disallow redundant return statements.
    'no-useless-return': 'error',
    // Disallow `void` operators.
    'no-void': 'error',
    // Disallow specified warning terms in comments.
    'no-warning-comments': 'off',
    // Disallow `with` statements.
    'no-with': 'error',
    // Enforce using named capture group in regular expression.
    'prefer-named-capture-group': 'off',
    // Require using Error objects as Promise rejection reasons.
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    // Disallow use of the `RegExp` constructor in favor of regular expression literals.
    'prefer-regex-literals': 'off',
    // Enforce the consistent use of the radix argument when using `parseInt()`.
    'radix': ['error', 'always'],
    // Disallow async functions which have no `await` expression.
    'require-await': 'off',
    // Enforce the use of `u` flag on RegExp.
    'require-unicode-regexp': 'off',
    // Require `var` declarations be placed at the top of their containing scope.
    'vars-on-top': 'off',
    // Require parentheses around immediate `function` invocations.
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],
    // Require or disallow "Yoda" conditions.
    'yoda': 'error',
  },
};

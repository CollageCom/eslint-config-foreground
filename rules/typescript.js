module.exports = {
  env: {
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // Require that member overloads be consecutive.
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    // Requires using either `T[]` or `Array<T>` for arrays.
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    // Require a specific member delimiter style for interfaces and type literals.
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
    }],
    // Enforces consistent usage of type assertions.
    '@typescript-eslint/consistent-type-assertions': ['error', {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow',
    }],
    // Enforces consistent usage of type imports.
    '@typescript-eslint/consistent-type-imports': ['error', {
      prefer: 'type-imports',
      disallowTypeAnnotations: true,
    }],
    // Require consistent spacing around type annotations.
    '@typescript-eslint/type-annotation-spacing': 'error',
    // Exhaustiveness checking in switch with union type.
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    // Disallows unnecessary constraints on generic types.
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    // Disallows returning any from a function.
    '@typescript-eslint/no-unsafe-return': 'warn',
    // Disallow usage of the `any` type.
    '@typescript-eslint/no-explicit-any': 'warn',
    // Prefer usage of `as const` over literal type.
    '@typescript-eslint/prefer-as-const': 'error',
    // Enforce `includes` method over `indexOf` method.
    '@typescript-eslint/prefer-includes': 'error',
    // Enforce consistent spacing before and after commas.
    '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
    // Enforce consistent spacing inside braces
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    // Enforce space around infix operators.
    '@typescript-eslint/space-infix-ops': ['error', { int32Hint: false }],
    // Enforce consistent spacing before and after keywords.
    '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],
    // Enforce consistent brace style for blocks.
    '@typescript-eslint/brace-style': ['error', '1tbs'],
    // Disallow the use of variables before they are defined.
    '@typescript-eslint/no-use-before-define': 'error',
  },
};

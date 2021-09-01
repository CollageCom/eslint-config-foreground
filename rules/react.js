module.exports = {
  plugins: ['react', 'react-hooks'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Prevent definitions of unused propTypes.
    'react/no-unused-prop-types': 'error',
    // Restrict file extensions that may contain JSX.
    'react/jsx-filename-extension': 'off',
    // Disallow JSX props spreading.
    'react/jsx-props-no-spreading': 'off',
    // Forbid certain propTypes.
    'react/forbid-prop-types': 'error',
    // Enforce a defaultProps definition for every prop that is not a required prop.
    'react/require-default-props': 'off',
    // Prevent usage of button elements without an explicit type attribute.
    'react/button-has-type': 'error',
    // Enforce consistent usage of destructuring assignment of props, state, and context.
    'react/destructuring-assignment': ['error', 'always'],
    // Enforce boolean attributes notation in JSX.
    'react/jsx-boolean-value': ['error', 'never'],
    // Validate closing bracket location in JSX.
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    // Validate closing tag location in JSX.
    'react/jsx-closing-tag-location': 'error',
    // Enforce linebreaks in curly braces in JSX attributes and expressions.
    'react/jsx-curly-newline': ['error', { multiline: 'require', singleline: 'consistent' }],
    // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children.
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    // Require that the first prop in a JSX element be on a new line when the element is multiline.
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    // Enforce shorthand form for React fragments.
    'react/jsx-fragments': ['error', 'syntax'],
    // Validate JSX indentation.
    'react/jsx-indent': ['error', 2, { indentLogicalExpressions: true }],
    // Validate props indentation in JSX.
    'react/jsx-indent-props': ['error', 2],
    // Limit maximum of props on a single line in JSX when the element is multiline.
    'react/jsx-max-props-per-line': ['error', { when: 'multiline' }],
    // Prevent duplicate props in JSX.
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
    // Disallow undeclared variables in JSX.
    'react/jsx-no-undef': 'error',
    // Prevent React to be incorrectly marked as unused.
    'react/jsx-uses-react': ['error'],
    // Validate whitespace in and around the JSX opening and closing brackets.
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    // Prevent extra closing tags for components without children.
    'react/self-closing-comp': 'error',
    // No .bind() or Arrow Functions in JSX Props.
    'react/jsx-no-bind': ['error', {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
      ignoreDOMComponents: true,
    }],
    // Prevent usage of unsafe target='_blank'.
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
    // One JSX Element Per Line.
    'react/jsx-one-expression-per-line': 'off',
    // Prevent missing parentheses around multiline JSX.
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'ignore',
    }],
    // Prevent usage of setState in componentDidUpdate.
    'react/no-did-update-set-state': 'warn',
    // Prevent using string references.
    'react/no-string-refs': 'error',
    // Prevent definitions of unused state.
    'react/no-unused-state': 'error',
    // Prevent usage of setState in componentWillUpdate.
    'react/no-will-update-set-state': 'error',
    // Prevent using this.state within a this.setState.
    'react/no-access-state-in-setstate': 'error',
    // Prevent usage of Array index in keys.
    'react/no-array-index-key': 'warn',
    // Prevent invalid characters from appearing in markup.
    'react/no-unescaped-entities': 'warn',
    // Enforce stateless React Components to be written as a pure function.
    'react/prefer-stateless-function': 'error',
    // Enforces where React component static properties should be positioned.
    'react/static-property-placement': 'off',
    // Enforce state initialization style.
    'react/state-in-constructor': ['error', 'always'],
    // Enforce component methods order.
    'react/sort-comp': 'off',
    // Enforce rules of hooks.
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};

const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    // Require or disallow initialization in variable declarations.
    'init-declarations': 'off',
    // Disallow deleting variables.
    'no-delete-var': 'error',
    // Disallow labels that share a name with a variable.
    'no-label-var': 'error',
    // Disallow specified global variables.
    'no-restricted-globals': [
      'warn',
      {
        name: 'isFinite',
        message:
          'Use Number.isFinite instead of global isFinite',
      },
      {
        name: 'isNaN',
        message:
          'Use Number.isNaN instead of global isNaN',
      },
    ].concat(confusingBrowserGlobals),
    // Disallow variable declarations from shadowing variables declared in the outer scope.
    'no-shadow': 'off',
    // Disallow identifiers from shadowing restricted names.
    'no-shadow-restricted-names': 'error',
    // Disallow the use of undeclared variables unless mentioned in `/*global */` comments.
    'no-undef': 'off',
    // Disallow initializing variables to `undefined`.
    'no-undef-init': 'error',
    // Disallow the use of `undefined` as an identifier.
    'no-undefined': 'off',
    // Disallow unused variables.
    'no-unused-vars': 'off',
    // Disallow the use of variables before they are defined.
    'no-use-before-define': 'off',
  },
};

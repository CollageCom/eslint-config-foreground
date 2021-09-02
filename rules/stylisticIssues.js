module.exports = {
  rules: {
    // Enforce linebreaks after opening and before closing array brackets.
    'array-bracket-newline': 'off',
    // Enforce consistent spacing inside array brackets.
    'array-bracket-spacing': ['error', 'never'],
    // Enforce line breaks after each array element.
    'array-element-newline': 'off',
    // Disallow or enforce spaces inside of blocks after opening block and before closing block.
    'block-spacing': ['error', 'always'],
    // Enforce consistent brace style for blocks.
    'brace-style': 'off',
    // Enforce camelcase naming convention.
    'camelcase': 'warn',
    // Enforce or disallow capitalization of the first letter of a comment.
    'capitalized-comments': 'off',
    // Require or disallow trailing commas.
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'only-multiline',
    }],
    // Enforce consistent spacing before and after commas.
    'comma-spacing': 'off',
    // Enforce consistent comma style.
    'comma-style': ['error', 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      }
    }],
    // Enforce consistent spacing inside computed property brackets.
    'computed-property-spacing': ['error', 'never'],
    // Enforce consistent naming when capturing the current execution context.
    'consistent-this': 'off',
    // Require or disallow newline at the end of files.
    'eol-last': ['error', 'always'],
    // Require or disallow spacing between function identifiers and their invocations.
    'func-call-spacing': ['error', 'never'],
    // Require function names to match the name of the variable or property to which they are assigned.
    'func-name-matching': 'off',
    // Require or disallow named `function` expressions.
    'func-names': 'warn',
    // Enforce the consistent use of either `function` declarations or expressions.
    'func-style': 'off',
    // Enforce line breaks between arguments of a function call.
    'function-call-argument-newline': 'off',
    // Enforce consistent line breaks inside function parentheses.
    'function-paren-newline': ['error', 'consistent'],
    // Disallow specified identifiers.
    'id-denylist': 'off',
    // Enforce minimum and maximum identifier lengths.
    'id-length': 'off',
    // Require identifiers to match a specified regular expression.
    'id-match': 'off',
    // Enforce the location of arrow function bodies.
    'implicit-arrow-linebreak': ['error', 'beside'],
    // Enforce consistent indentation.
    indent: ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      ignoreComments: false
    }],
    // Enforce the consistent use of either double or single quotes in JSX attributes.
    'jsx-quotes': 'off',
    // Enforce consistent spacing between keys and values in object literal properties.
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    // Enforce consistent spacing before and after keywords.
    'keyword-spacing': 'off',
    // Enforce position of line comments.
    'line-comment-position': 'off',
    // Enforce consistent linebreak style.
    'linebreak-style': ['error', 'unix'],
    // Require empty lines around comments.
    'lines-around-comment': 'off',
    // Require or disallow an empty line between class members.
    'lines-between-class-members': 'off',
    // Enforce a maximum depth that blocks can be nested.
    'max-depth': 'off',
    // Enforce a maximum line length.
    'max-len': ['error', { code: 140 }],
    // Enforce a maximum number of lines per file.
    'max-lines': 'off',
    // Enforce a maximum number of lines of code in a function.
    'max-lines-per-function': 'off',
    // Enforce a maximum depth that callbacks can be nested.
    'max-nested-callbacks': 'off',
    // Enforce a maximum number of parameters in function definitions.
    'max-params': 'off',
    // Enforce a maximum number of statements allowed in function blocks.
    'max-statements': 'off',
    // Enforce a maximum number of statements allowed per line.
    'max-statements-per-line': 'off',
    // Enforce a particular style for multiline comments.
    'multiline-comment-style': 'off',
    // Enforce newlines between operands of ternary expressions.
    'multiline-ternary': 'off',
    // Require constructor names to begin with a capital letter.
    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],
    // Enforce or disallow parentheses when invoking a constructor with no arguments.
    'new-parens': 'error',
    // Require a newline after each call in a method chain.
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
    // Disallow `Array` constructors.
    'no-array-constructor': 'error',
    // Disallow bitwise operators.
    'no-bitwise': 'warn',
    // Disallow `continue` statements.
    'no-continue': 'off',
    // Disallow inline comments after code.
    'no-inline-comments': 'off',
    // Disallow `if` statements as the only statement in `else` blocks.
    'no-lonely-if': 'error',
    // Disallow mixed binary operators.
    'no-mixed-operators': ['warn', {
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['**', '+'],
        ['**', '-'],
        ['**', '*'],
        ['**', '/'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: true,
    }],
    // Disallow mixed spaces and tabs for indentation.
    'no-mixed-spaces-and-tabs': 'error',
    // Disallow use of chained assignment expressions.
    'no-multi-assign': 'error',
    // Disallow multiple empty lines.
    'no-multiple-empty-lines': 'error',
    // Disallow negated conditions.
    'no-negated-condition': 'off',
    // Disallow nested ternary expressions.
    'no-nested-ternary': 'warn',
    // Disallow `Object` constructors.
    'no-new-object': 'error',
    // Disallow the unary operators `++` and `--`.
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    // Disallow specified syntax.
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-restricted-syntax': [
      'warn',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
    ],
    // Disallow all tabs.
    'no-tabs': 'error',
    // Disallow ternary operators.
    'no-ternary': 'off',
    // Disallow trailing whitespace at the end of lines.
    'no-trailing-spaces': ['error', {
      skipBlankLines: false,
      ignoreComments: false,
    }],
    // Disallow dangling underscores in identifiers.
    'no-underscore-dangle': 'off',
    // Disallow ternary operators when simpler alternatives exist.
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    // Disallow whitespace before properties.
    'no-whitespace-before-property': 'error',
    // Enforce the location of single-line statements.
    'nonblock-statement-body-position': ['error', 'below'],
    // Enforce consistent line breaks after opening and before closing braces.
    'object-curly-newline': 'off',
    // Enforce consistent spacing inside braces.
    'object-curly-spacing': 'off',
    // Enforce placing object properties on separate lines.
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    // Enforce variables to be declared either together or separately in functions.
    'one-var': ['error', 'never'],
    // Require or disallow newlines around variable declarations.
    'one-var-declaration-per-line': ['error', 'always'],
    // Require or disallow assignment operator shorthand where possible.
    'operator-assignment': ['error', 'always'],
    // Enforce consistent linebreak style for operators.
    'operator-linebreak': 'off',
    // Require or disallow padding within blocks.
    'padded-blocks': ['error', {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    }, {
      allowSingleLineBlocks: true,
    }],
    // Require or disallow padding lines between statements.
    'padding-line-between-statements': 'off',
    // Disallow the use of `Math.pow` in favor of the `**` operator.
    'prefer-exponentiation-operator': 'off',
    // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
    'prefer-object-spread': 'off',
    // Require quotes around object literal property names.
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
    // Enforce the consistent use of either backticks, double, or single quotes.
    'quotes': ['error', 'single', { avoidEscape: true }],
    // Require or disallow semicolons instead of ASI.
    'semi': ['error', 'always'],
    // Enforce consistent spacing before and after semicolons.
    'semi-spacing': ['error', { before: false, after: true }],
    // Enforce location of semicolons.
    'semi-style': ['error', 'last'],
    // Require object keys to be sorted.
    'sort-keys': 'off',
    // Require variables within the same declaration block to be sorted.
    'sort-vars': 'off',
    // Enforce consistent spacing before blocks.
    'space-before-blocks': 'error',
    // Enforce consistent spacing before `function` definition opening parenthesis.
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],
    // Enforce consistent spacing inside parentheses.
    'space-in-parens': ['error', 'never'],
    // Require spacing around infix operators.
    'space-infix-ops': 'off',
    // Enforce consistent spacing before or after unary operators.
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
      overrides: {
      },
    }],
    // Enforce consistent spacing after the `//` or `/*` in a comment.
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    // Enforce spacing around colons of switch statements.
    'switch-colon-spacing': ['error', { after: true, before: false }],
    // Require or disallow spacing between template tags and their literals.
    'template-tag-spacing': ['error', 'never'],
    // Require or disallow Unicode byte order mark (BOM).
    'unicode-bom': ['error', 'never'],
    // Require parenthesis around regex literals.
    'wrap-regex': 'off',
  },
};

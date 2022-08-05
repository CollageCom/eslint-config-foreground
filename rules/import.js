module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json'],
      },
    },
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  },
  rules: {
    // Ensure if a default import is requested, there is default export in the imported module.
    'import/default': 'off',
    // Reports any dynamic imports without a webpackChunkName specified in a leading block comment in the proper format.
    'import/dynamic-import-chunkname': 'off',
    // Reports funny business with exports, like repeated exports of names or defaults.
    'import/export': 'error',
    // Ensures that all exports are declared at the bottom of the file. 
    'import/exports-last': 'off',
    // Ensure consistent use of file extension within the import path.
    'import/extensions': 'off',
    // Reports any imports that come after non-import statements.
    'import/first': 'error',
    // Reports when named exports are not grouped together in a single export declaration or when
    // multiple assignments to CommonJS module.exports or exports object are present in a single file.
    'import/group-exports': 'off',
    // Disallow non-import statements appearing before import statements.
    'import/imports-first': 'off', // Deprecated in favour of `import/first`.
    // Forbid modules to have too many dependencies.
    'import/max-dependencies': 'off',
    // Ensures all named imports are part of the set of named exports in the referenced module.
    'import/named': 'error',
    // Ensures names exist at the time they are dereferenced, when imported as a full namespace.
    'import/namespace': 'off',
    // Enforces having one or more empty lines after the last top-level import statement or require call.
    'import/newline-after-import': 'error',
    // Forbid import of modules using absolute paths.
    'import/no-absolute-path': 'error',
    // Reports AMD import calls at the module scope.
    'import/no-amd': 'error',
    // Reports if a module's default export is unnamed.
    'import/no-anonymous-default-export': ['error', {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: false,
    }],
    // Reports CommonJS import calls at the module scope.
    'import/no-commonjs': 'off',
    // Ensures that there is no resolvable path back to this module via its dependencies.
    'import/no-cycle': 'off',
    // Prohibit default exports.
    'import/no-default-export': 'off',
    // Reports use of a deprecated name.
    'import/no-deprecated': 'off',
    // Reports if a resolved path is imported more than once.
    'import/no-duplicates': 'off',
    // Forbid require() calls with expressions.
    'import/no-dynamic-require': 'error',
    // Forbid the use of extraneous packages.
    'import/no-extraneous-dependencies': 'off',
    // Reports the use of import declarations with CommonJS exports in any module except for the main module.
    'import/no-import-module-exports': 'off',
    // Prevent importing the submodules of other modules.
    'import/no-internal-modules': 'off',
    // Forbids the use of mutable exports with var or let.
    'import/no-mutable-exports': 'error',
    // Reports use of an exported name as a property on the default export.
    'import/no-named-as-default-member': 'off',
    // Reports use of an exported name as the locally imported name of a default export.
    'import/no-named-as-default': 'off',
    // Reports use of a default export as a locally named import.
    'import/no-named-default': 'error',
    // Prohibit named exports.
    'import/no-named-export': 'off',
    // Enforce a convention of not using namespace imports.
    'import/no-namespace': 'off',
    // Forbid the use of Node.js builtin modules.
    'import/no-nodejs-modules': 'off',
    // Prevent importing packages through relative paths.
    'import/no-relative-packages': 'off',
    // prevent imports to folders in relative parent paths.
    'import/no-relative-parent-imports': 'off',
    // Restrict which files can be imported in a given folder.
    'import/no-restricted-paths': 'off',
    // Forbid a module from importing itself.
    'import/no-self-import': 'off',
    // Forbid unassigned imports.
    'import/no-unassigned-import': 'off',
    // Ensures an imported module can be resolved to a module on the local filesystem.
    'import/no-unresolved': 'off',
    // Reports modules without any exports, or with unused exports.
    'import/no-unused-modules': 'off',
    // Prevent unnecessary path segments in import and require statements.
    'import/no-useless-path-segments': 'error',
    // Forbid Webpack loader syntax in imports.
    'import/no-webpack-loader-syntax': 'warn',
    // Enforce a convention in the order of require() / import statements.
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],
    // When there is only a single export from a module, prefer using default export over named export.
    'import/prefer-default-export': 'off',
    // Warn if a module could be mistakenly parsed as a script by a consumer leveraging Unambiguous
    // JavaScript Grammar to determine correct parsing goal.
    'import/unambiguous': 'off',
  },
};

# eslint-config-foreground

[![npm version](https://badge.fury.io/js/eslint-config-foreground.svg)](http://badge.fury.io/js/eslint-config-foreground)

This package provides Foreground's Typescript .eslintrc as an extensible shared config.

## Usage

We export the Foreground ESLint configuration for your usage.

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npx install-peerdeps --dev eslint-config-foreground
  ```

2. Add `"extends": "foreground"` to your .eslintrc.

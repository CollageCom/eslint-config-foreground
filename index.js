module.exports = {
  extends: [
    './rules/possibleErrors',
    './rules/bestPractices',
    './rules/strictMode',
    './rules/variables',
    './rules/stylisticIssues',
    './rules/es6',
    './rules/import',
    './rules/typescript',
    './rules/react',
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {},
};

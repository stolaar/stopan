module.exports = {
  extends: ['custom'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  env: {
    node: true,
  },
  rules: {
    'no-unused-vars': 'off', // Example of custom rule override
  },
}

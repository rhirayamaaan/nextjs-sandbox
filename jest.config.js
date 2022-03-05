module.exports = {
  preset: 'ts-jest',
  modulePaths: ['components/', 'containers/', 'services/', 'api/'],
  testMatch: ['**/*.spec.ts?(x)'],
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.test.json',
    },
  },
}

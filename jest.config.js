module.exports = {
  preset: 'ts-jest',
  modulePaths: ['components/', 'containers/', 'services/', 'api/'],
  testMatch: ['**/*.spec.ts?(x)'],
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.test.json',
    },
  },
  transform: {
    '\\.(svg|png|jpg|jpeg|gif|css|scss)$': '<rootDir>/jest/fileTransformer.js',
  },
  testEnvironment: 'jsdom',
}

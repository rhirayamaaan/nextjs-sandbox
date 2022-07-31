export default {
  preset: 'ts-jest',
  testMatch: ['**/*.spec.ts?(x)'],
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.test.json',
    },
  },
  transform: {
    '\\.(svg|png|jpg|jpeg|gif|css|scss)$': '<rootDir>/jest/fileTransformer.js',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testEnvironment: 'jsdom',
}

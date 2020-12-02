// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json'],
  // The path to a module that runs some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['jest-extended'],
  // The test environment that will be used for testing
  testEnvironment: 'node',
  // The glob patterns Jest uses to detect test files
  testMatch: ['**/?(*.)+(spec|test).js?(x)'],
  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/'],
  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
}

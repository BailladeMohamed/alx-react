module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/config/setupTests.js'], // Correct the path here
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  testEnvironment: 'jsdom'
};

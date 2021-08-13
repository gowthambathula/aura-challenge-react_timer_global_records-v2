module.exports = {
  automock: false,
  coveragePathIgnorePatterns: ["node_modules"],
  coverageReporters: ["lcov", "cobertura", "text"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.(s?css)$": "identity-obj-proxy",
    "^Internal(.*)$": "<rootDir>/src/_internal$1",
    "\\.(jpg|jpeg|png|gif)$": "<rootDir>/src/_internal/__mocks__/fileMock.js",
  },
  transform: {
    "^.+\\.(js)$": "babel-jest",
  },
  reporters: ["default"],
};

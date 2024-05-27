/** @type {import('ts-jest').JestConfigWithTsJest} */
import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  verbose: true,
  transform: {
    '\\.tsx?$': ['ts-jest', {
      tsconfig: '<rootDir>/tsconfig.server.json',
      useEsm: true,
    }]
  },
  // Dont include the /dist folder in tests, otherwise you'll run the tests twice
  testPathIgnorePatterns: ['/node_modules/', '/dist'],
  testMatch: ['**/*.test.[t]s?(x)'],
  moduleDirectories: ['node_modules', 'src'],
  // https://kulshekhar.github.io/ts-jest/docs/guides/esm-support
  transformIgnorePatterns: ['/node_modules'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};

export default config;

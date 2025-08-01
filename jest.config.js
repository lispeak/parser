// jest.config.js
export default {
    preset: 'ts-jest/presets/default-esm', // ESM + TypeScript
    testEnvironment: 'node',
    extensionsToTreatAsEsm: ['.ts'],
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
    transform: {
        '^.+\\.ts$': ['ts-jest', { useESM: true }],
    },
};

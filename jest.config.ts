import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    verbose: true,
    setupFilesAfterEnv: ['./src/jest-setup.ts'],
}

export default config;
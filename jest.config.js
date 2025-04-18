export default {
    projects: [
        {
            displayName: "server",
            preset: "ts-jest",
            testEnvironment: "node",
            testMatch: [
                "**/__tests__/**/*.test.[jt]s",
                "**/api/**/*.test.[jt]s",
                "**/server/**/*.test.[jt]s",
            ],
            moduleNameMapper: {
                "^@/(.*)$": "<rootDir>/src/$1",
            },
            transform: {
                "^.+\\.(t|j)s$": "ts-jest",
            },
            globals: {
                "ts-jest": {
                    tsconfig: "tsconfig.client.json", // Optional: if you have separate TS config
                },
            },
            collectCoverage: true,
            coverageDirectory: "coverage/server",
            coveragePathIgnorePatterns: [
                "/node_modules/",
                "/.next/",
                "/__tests__/",
                "/types/",
            ],
        },
        {
            displayName: "client",
            preset: "ts-jest",
            testEnvironment: "jsdom",
            testMatch: [
                "**/__tests__/**/*.test.tsx", // Only .tsx test files in __tests__
            ],
            moduleNameMapper: {
                "^@/(.*)$": "<rootDir>/src/$1",
                "^.+\\.(css|less|scss|sass)$": "identity-obj-proxy",
            },
            transform: {
                "^.+\\.(t|j)sx?$": [
                    "ts-jest",
                    {
                        tsconfig: "tsconfig.client.json",
                        useESM: true,
                    },
                ],
            },
            extensionsToTreatAsEsm: [".ts", ".tsx"],
            moduleNameMapper: {
                "^@/(.*)$": "<rootDir>/src/$1",
                "^.+\\.(css|less|scss|sass)$": "identity-obj-proxy",
            },
            transformIgnorePatterns: [
                "node_modules/(?!(next|@clerk|lucide-react)/)", // Add other packages if needed
            ],
        },
    ],
    collectCoverageFrom: [
        "src/**/*.{ts,tsx}",
        "!src/**/*.d.ts",
        "!src/**/*.stories.tsx",
        "!src/**/index.ts", // ignore barrel files
    ],
};

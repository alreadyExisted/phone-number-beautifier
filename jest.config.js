module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: './src/__tests__/tsconfig.json'
    }
  },
  testMatch: [
    "**/__tests__/**/*.ts",
    "!**/__tests__/**/utils.ts"
  ]
}
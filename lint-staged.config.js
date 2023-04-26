module.exports = {
  './src/*.{ts,tsx,vue}': [
    () => 'pnpm typecheck', // Have to run typecheck on all files via a function - can't check just staged files
    'eslint --fix',
  ],
  './src/*.{js,jsx}': 'eslint --fix',
}

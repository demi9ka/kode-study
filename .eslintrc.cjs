module.exports = {
  root: true,
  extends: ['@kode-frontend/eslint-config/native'],
  overrides: [
    {
      files: ['__tests__/**/*'],
      env: {
        jest: true,
      },
    },
  ],
}

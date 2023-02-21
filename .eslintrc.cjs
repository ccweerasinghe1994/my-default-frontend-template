module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'prettier',
        'plugin:react/jsx-runtime',
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    plugins: ['react', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'comma-dangle': 0,
        'arrow-body-style': 0,
        'prefer-arrow-callback': 0,
    },
}

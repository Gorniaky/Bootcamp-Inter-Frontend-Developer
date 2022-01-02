module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
		'no-extra-semi': 'warn',
		'no-mixed-spaces-and-tabs': 'warn',
		'no-undef': 'warn',
		'no-unused-vars': 'warn',
		'no-unreachable': 'warn',
        'react/prop-types': 'warn'
    },
};

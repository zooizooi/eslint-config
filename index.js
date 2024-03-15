const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const stylistic = require('@stylistic/eslint-plugin');

const config = [
    {
        plugins: {
            '@stylistic': stylistic
        },
    },
    {
        rules: {
            'semi': 'error',
            'object-curly-spacing': ['error', 'always'],
            'quotes': ['error', 'single'],
            'space-in-parens': ['error', 'never'],
            'key-spacing': ['error',  { 'afterColon': true }],
            '@stylistic/indent': ['error', 4],
            '@stylistic/space-before-function-paren': ['error', 'never'],
            '@stylistic/eol-last': ['error', 'never']
        }
    }
];

module.exports = {
    vanilla: [
        eslint.configs.recommended,
        ...config,
        {
            rules: {
                'no-unused-vars': 'warn',
            }
        }
    ],
    typescript: tseslint.config(
        eslint.configs.recommended,
        ...tseslint.configs.recommended,
        ...config,
        {
            rules: {
                '@typescript-eslint/no-unused-vars': 'warn',
            }
        }
    )
};
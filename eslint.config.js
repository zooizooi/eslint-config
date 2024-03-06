import eslint  from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        plugins: {
            '@stylistic': stylistic
        },
    },
    {
        rules: {
            'semi': 'error',
            'object-curly-spacing': ['error', 'always'],
            'linebreak-style': ['error', 'unix'],
            'quotes': ['error', 'single'],
            'space-in-parens': ['error', 'never'],
            'key-spacing': ['error',  { 'afterColon': true }],
            '@stylistic/indent': ['error', 4],
            '@stylistic/space-before-function-paren': ['error', 'never'],
            '@stylistic/eol-last': ['error', 'never']
        }
    }
);
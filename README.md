# ESLint config
`@ZOOIZOOI` ESLint configuration

### Install
```bash
# npm
npm install @ZOOIZOOI/eslint-config

# pnpm
pnpm add @ZOOIZOOI/eslint-config
```

### Use
```js
import config from '@ZOOIZOOI/eslint-config';

// Vanilla
export default config.vanilla;

// TypeScript
export default config.typescript;
```

### Custom rules
```js
export default {
    ...config.vanilla,
    {
        rules: {
            '***': '***'
        }
    }
}
```
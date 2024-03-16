# ESLint config
`@ZOOIZOOI` ESLint configuration

### Install
```bash
# npm
npm install @zooizooi/eslint-config

# pnpm
pnpm add @zooizooi/eslint-config
```

### Use
```js
import config from '@zooizooi/eslint-config';

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
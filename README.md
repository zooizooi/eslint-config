# ESLint config
`@ZOOIZOOI` ESLint configuration

### Install
```bash
ni @zooizooi/eslint-config
```

### Use
Add the following in `eslint.config.js`
```js
import config from '@zooizooi/eslint-config';

// Vanilla
export default config.vanilla;

// TypeScript
export default config.typescript;
```

### Custom rules
```js
export default [
    ...config.vanilla,
    {
        rules: {
            '***': '***'
        }
    }
]
```

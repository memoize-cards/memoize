# Env

The `env` package is a JavaScript library that provides access to the Node.js execution environment, allowing you to easily check the current environment (production and development).

### Usage

After installing the package, you can import it and start using it in your code.

```js
import env from '@standard/env'
```

### Properties

The env object is a Proxy that has the following properties:

- `env.production`: Returns true if the environment is `production`, otherwise returns false.
- `env.development`: Returns true if the environment is `development`, otherwise returns false.

These properties facilitate checking the current environment in your code, allowing you to execute specific code blocks for each environment.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).

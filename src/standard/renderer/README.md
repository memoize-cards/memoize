# Renderer

When testing components with Jest, you often need to render JSX elements to verify their behavior. A renderer provides a way to create a virtual representation of your components, allowing you to assert their output and behavior. This guide will walk you through the process of using a renderer to render JSX elements for testing in Jest.

### Usage

1. Create a test file, e.g., `component.test.js`, for your component's tests.

2. Import the necessary libraries

```js
import renderer from '@standard/renderer'
```

3. Write your tests using Jest's test or it function. Inside the test, use the render function from the testing library to render your component

```js
const tree = renderer(<Component />)
expect(container).toMatchSnapshot()
```

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).

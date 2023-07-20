# h

Hyperscript (H) is a lightweight JavaScript library that provides a simple and intuitive syntax for creating and manipulating DOM elements. It is inspired by the popular Hyperscript library but designed to be even more minimalistic and easy to use.

### Features

- Easy and concise syntax for creating DOM elements.
- Supports nested elements and attributes.
- Chainable API for easy DOM manipulation.
- Lifecycle hooks for component-level control.

### Usage

Import Hyperscript (H) into your JavaScript file:

```js
import h from '@standard/h'
```

### Creating DOM Elements

To create DOM elements, simply call the `h` function with the element name as the first argument, followed by optional attributes and children:

```js
const myElement = h('div', { id: 'my-div', className: 'container' }, [
  h('h1', 'Hello, Hyperscript!'),
  h('p', 'This is a lightweight library for creating DOM elements.')
])
```

### Component Lifecycle Hooks

Hyperscript (`h`) also supports component lifecycle hooks, such as `willMount`, `didMount`, `willUpdate`, `didUpdate`, `willUnmount` and `didUnmount`. You can use these hooks to perform actions at different stages of the component lifecycle:

```js
import { willMount, didMount, willUpdate, willUnmount } from '@your-username/hyperscript';

class MyComponent {
  @willMount
  setup() {
    // Perform setup actions before the component is mounted.
  }

  @didMount
  onMount() {
    // Perform actions after the component is mounted.
  }

  @willUpdate
  onUpdate() {
    // Perform actions before the component is updated.
  }

  @willUnmount
  onUnmount() {
    // Perform actions before the component is unmounted.
  }
}
```

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).

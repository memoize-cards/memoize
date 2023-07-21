# Icon

The `Icon` component is a versatile and customizable icon library that provides a collection of SVG icons for use in your web applications. The library includes various icons for common actions and UI elements, such as arrows, symbols, and indicators. The `Icon` component allows you to easily render these icons using simple JSX syntax.

### Usage

1. Import the `Icon` component into your component or other frontend files:

```js
import icon from '@elements/icon'
```

2. Render the desired `icon` using the Icon component:

```js
const MyComponent = () => {
  return (
    <div>
      <h1>My Web Application</h1>
      <p>Click the arrow to navigate back.</p>
      <Icon.CaretLeft />
    </div>
  )
}
```

In the above example, we are rendering the `CaretLeft` icon from the `Icon` component library using the JSX syntax `<Icon.CaretLeft />`. This will render the SVG icon representing a left-pointing caret arrow.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).

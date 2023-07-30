# Stack

The `stack` component is a flexible and versatile styled component that utilizes flexbox properties for layout management. It provides an easy way to create responsive and dynamic layouts with alignment, content positioning, direction, and gap customization.

### Usage

1. Import the `stack` component in your project.

```js
import stack from '@elements/stack'
```

2. Use the `stack` component in your code to create flexible layouts.

```js
import stack from '@elements/stack'

const App = () => {
  return (
    <stack.Div column center>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </stack.Div>
  )
}

export default App
```

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).

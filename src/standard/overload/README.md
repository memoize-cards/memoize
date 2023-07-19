# Overload

The `overload` package provides a utility function for overloading methods in an object or class prototype. It allows you to define multiple methods with the same name but different parameter lists, providing flexibility and convenience in method invocation.

### Usage

To use the `overload` function, follow these steps:

1. Import the `overload` function:

```js
import overload from '@standard/overload'
```

2. Apply the `overload` decorator to the target object or class:

```js
class Fragment {
  @overload(
    'appendChild'
  )
  after (child) {
    const [...childList] = this.#children
    const lastChild = childList.pop()
    lastChild.after(child)
    return this
  }
}
```

3. Call the overloaded methods with the appropriate arguments:

```js
fragment.after()
fragment.appendChild()
```

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).

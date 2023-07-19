# Override

The `override` package provides a simple function for overriding the implementation of an existing function or method in an object or class prototype. It allows you to replace the logic of a function with a new implementation while preserving the original name and scope.

### Usage

To use `override`, import it into your file and call the override function with the necessary parameters: the target object, the name of the property to override, and the new implementation.

Here's a basic example of how to use `override`:

```js
import override from '@standard/override'

const obj = {
  sayHello() {
    console.log('Hello')
  }
}

override(obj, 'sayHello', function (args, next) {
  console.log('Goodbye')
  return next(...args)
});

obj.sayHello()
// Output: "Goodbye"
// Output: "Hello"
```

In the above example, the `sayHello` function of the `obj` object has been overridden with a new implementation that prints "Goodbye" instead of "Hello".

Note that the new implementation will have access to the arguments passed to the original function and can also call the original function using the `next` function. This allows you to add or modify behavior without losing the original functionality.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).

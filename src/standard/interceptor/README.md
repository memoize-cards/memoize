# Interceptor

The `interceptor` function is a decorator that allows you to intercept method calls and execute custom logic before and after the method execution. It provides a flexible way to modify or enhance the behavior of methods in an object or class.

### Usage

Here's an example demonstrating the usage of the translateX decorator:

```js
import { paint } from '@standard/h';
import interceptor from '@standard/interceptor';

const translateX = interceptor(function (args, next) {
  requestAnimationFrame(() => {
    this[paint.rootElement]().querySelector('div').style = `transform: translateX(${this.x}px)`;
  });
  return next(...args);
});

class MyClass {
  x = 100;

  @translateX
  myMethod() {
    console.log('Method executed');
  }
}

const instance = new MyClass();
instance.myMethod(); // Output: Method executed (translation effect applied)
```

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).

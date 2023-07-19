# Revoke

Revoke is a JavaScript utility that provides a decorator function for revoking class instantiation and property access using the Proxy API. It allows you to control the execution of a class and customize its behavior.

### Usage

To use Revoke, import the `revoke` decorator and apply it to the class you want to revoke. The decorator will create a revoked proxy for the class, allowing you to intercept and modify class instantiation and property access.

Here's an example:

```js
import revoke from '@standard/revoke'

@revoke
class MyClass {
  constructor(name) {
    this.name = name
  }

  greet() {
    console.log(`Hello, ${this.name}!`)
  }
}

const instance = new MyClass('John')
instance.greet() // Output: Hello, John!

instance.name = 'Alice'
console.log(instance.name) // Output: Alice
```

In the above example, the `@revoke` decorator creates a revoked proxy for the `MyClass` class. The revoked proxy intercepts property access and method calls, allowing you to control the behavior of the class.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).

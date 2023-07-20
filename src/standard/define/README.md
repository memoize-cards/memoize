# define

The define function is a utility function that simplifies the process of defining a custom element using the `customElements.define` method.

### Parameters

- `name` (string): The name of the custom element. It must contain a hyphen (-) and be in lowercase.
- `options` (object, optional): An object with options for the custom element definition. The available options are:
- `extends` (string, optional): The tag name of the native HTML element that the custom element extends. If provided, the custom element becomes an extension of the specified native element (e.g., `button`, `input`, etc.).

### Return Value

The `define` function returns a function that takes a `ClassRef` parameter. When this returned function is called with the `ClassRef`, it registers the custom element with the specified name and class using `customElements.define`.

```js
import define from '@standard/define'

@define('my-button', { extends: 'button' })
class MyButton extends HTMLButtonElement {
  // Your custom button implementation...
}

// Define the custom element with the name "my-button" and extend the HTMLButtonElement
export default MyButton
```

Now, you can use the custom element `<button is="my-button"></button>` in your HTML, and it will behave as a custom element with your custom implementation.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).

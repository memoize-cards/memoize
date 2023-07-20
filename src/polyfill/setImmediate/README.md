# Polyfill for `setImmediate`

The following code is a polyfill for the `setImmediate` function, which is used to schedule a function to be executed asynchronously as soon as possible. This polyfill provides a fallback implementation for environments that do not support `setImmediate`.

### Polyfill Code

```js
/**
 * Polyfill for `setImmediate` function.
 * If `setImmediate` is not supported in the current environment,
 * this polyfill will use `setTimeout` with a delay of 0 as a fallback.
 *
 * @param {function} functionRef - The callback function to be executed.
 * @returns {number} - A timeout ID that can be used to cancel the execution.
 */
Reflect.defineProperty(window, 'setImmediate', {
  value (functionRef) {
    return setTimeout(functionRef, 0)
  }
})
```

### Parameters

- `functionRef` (function): The callback function to be executed asynchronously.

### Return Value

- `{number}`: A timeout ID that can be used to cancel the scheduled execution using clearTimeout.

### Behavior

The `setImmediate` function is a method provided by modern browsers to schedule a function to be executed asynchronously as soon as possible, after the current JavaScript execution context has been cleared. It provides a way to execute a function with the highest priority without interfering with other tasks.

However, in older browsers or environments that do not support `setImmediate`, the polyfill will define a new `setImmediate` function on the `window` object. This polyfill will use `setTimeout` with a delay of 0 milliseconds as a fallback to achieve a similar asynchronous behavior.

### Example Usage

```js
// Define a function to be executed using setImmediate
function doSomething() {
  console.log('Doing something asynchronously...')
}

// Use setImmediate to schedule the function for asynchronous execution
const immediateId = window.setImmediate(doSomething)

// Cancel the execution if needed
// window.clearTimeout(immediateId)
```

In this example, the `doSomething` function is scheduled to be executed asynchronously using `window.setImmediate`. If the browser supports `setImmediate`, it will prioritize the execution of `doSomething` over other tasks. If not, the polyfill will use `setTimeout` to schedule the function with a delay of 0 milliseconds, achieving a similar effect of asynchronous execution. The returned timeout ID can be used to cancel the scheduled execution if necessary using `window.clearTimeout`.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).

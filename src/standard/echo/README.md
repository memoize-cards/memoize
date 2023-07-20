# echo

The Echo module is a simple JavaScript module that implements a basic publish/subscribe pattern, allowing communication between different parts of your application using events.

### Usage

`echo.emit(channel: string, message: any): void`

The `echo.emit` function allows you to emit an event on a specific channel with a given message.

Example:

```js
import { echo } from '@standard/echo'

// Emit an event with the message "Hello" on the "greetings" channel
echo.emit('greetings', 'Hello')
```

`echo.on(channel: string, listener: (message: any) => void): void`

The `echo.on` function allows you to subscribe to events on a specific channel. When an event is emitted on that channel, the provided listener function will be called with the event message.

Example:

```js
import { echo } from '@standard/echo'

// Subscribe to events on the "greetings" channel
echo.on('greetings', (message) => {
  console.log(`Received a greeting: ${message}`)
})
```

### Example

```js
// Import the echo module
import { echo } from '@standard/echo'

// Subscribe to events on the "greetings" channel
echo.on('greetings', (message) => {
  console.log(`Received a greeting: ${message}`)
})

// Emit an event with the message "Hello" on the "greetings" channel
echo.emit('greetings', 'Hello')
```

When you run this code, you should see the following output:

```
Received a greeting: Hello
```

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).

# Event

The `event` package provides a utility to create a new Proxy object that intercepts method calls and adds event handling capabilities to the methods. It allows you to seamlessly integrate event handling functionality into your objects.

### Usage

To use the `event` package, follow these steps:

1. Import the necessary module from the package:

```js
import event, { dispatch } from '@standard/event'
```

2. Create an object that you want to add event handling to. For example, let's say you have an object called `video`:

```js
class Video {
  @dispatch.onPlay
  play () {
    console.log('Playing the video...')
  }

  @dispatch.onPause
  pause () {
    console.log('Pausing the video...')
  }
}
```

3. Add event handling to the methods using the proxy:

```js
event.onPlay((...args) => console.log('Video play event fired!', args), video)
```

Now, whenever the `play` or `pause` methods are called, the event handling functions will also be executed.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).

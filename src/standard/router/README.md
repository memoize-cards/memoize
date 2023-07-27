# Router

The Router Package is a lightweight JavaScript library designed to manage routes and handle navigation within your web application. It provides a simple and flexible way to map URL paths to specific page functions, allowing you to easily build and maintain a navigation system for your single-page application.

### Usage

1. Import the necessary functions from the Router Package:

```js
import router, { params, urlFor } from '@standard/router'

router('/', function home () { console.log('home') })
router('/user/:id', function user () { console.log(`user.id ${params.id}`) })
router('/about', function about () { console.log('about') })

```

2. Use the `handle` function to navigate to the corresponding page based on the current URL.

```js
router.handle()
```

3. Generate URLs for named routes with the `urlFor` function:

```js
const userUrl = urlFor('user', { id: 123 })
console.log(userUrl) // Output: '/users/123'
```

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).

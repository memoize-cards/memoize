# Show

`Show` is a directive that allows you to show child elements based on a condition specified by the `when` attribute. When the `when` attribute evaluates to a truthy value, the child elements will be hidden from the view.

### Usage

1. Import the `Show` directive in the file where you want to use it:

```js
import Show from '@directve/show'
```

2. In the HTML template, use the `Show` directive and set the `when` attribute to conditionally show child elements:

```js
<Show when="show-condition">
  <!-- Child Elements -->
  <div>Visible Element</div>
  <div>Hidden Element</div>
  <div>Another Visible Element</div>
</Show>
```

In this example, the child elements will be hidden if the `when` attribute evaluates to a truthy value (e.g., `show-condition` is truthy).

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).

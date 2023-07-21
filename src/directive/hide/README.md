# Hide

`Hide` is a directive that allows you to hide child elements based on a condition specified by the `when` attribute. When the `when` attribute evaluates to a truthy value, the child elements will be hidden from the view.

### Usage

1. Import the `Hide` directive in the file where you want to use it:

```js
import Hide from '@directve/hide'
```

2. In the HTML template, use the `Hide` directive and set the `when` attribute to conditionally hide child elements:

```js
<Hide when="hide-condition">
  <!-- Child Elements -->
  <div>Visible Element</div>
  <div>Hidden Element</div>
  <div>Another Visible Element</div>
</Hide>
```

In this example, the child elements will be hidden if the `when` attribute evaluates to a truthy value (e.g., `hide-condition` is truthy).

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).

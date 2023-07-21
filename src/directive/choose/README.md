# Choose

`Choose` is a directive that allows you to choose child elements based on an attribute called `equal`. You can use this directive to select which child elements will be rendered based on a specific value defined by the `when` attribute.

### Usage

1. Import the choose directive in the file where you want to use it:

```js
import Choose from '@directive/choose'
```

2. In the HTML template, use the `Choose` directive and set the `when` attribute to select the child elements:

```js
<Choose when="chosen-value">
  <!-- Child Elements -->
  <div equal="chosen-value">Content of child element 1</div>
  <div equal="another-value">Content of child element 2</div>
  <div equal="chosen-value">Content of child element 3</div>
</Choose>
```

In this example, only the child elements that have the `equal` attribute with the value `chosen-value` will be rendered.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).

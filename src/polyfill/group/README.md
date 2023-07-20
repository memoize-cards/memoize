# Array.prototype.group

The `group` method is a custom extension added to the `Array.prototype` to group array elements based on the result of a provided function.

```js
/**
 * Group array elements based on the result of a provided function.
 *
 * @param {function} functionRef - The function that will be called for each element in the array.
 * @param {any} [thisRef] - The context to which the `functionRef` will be bound when called.
 * @returns {Object} - An object with groups where each key represents the result of `functionRef` and the value is an array of elements belonging to that group.
 */
Array.prototype.group = function (functionRef, thisRef) {
  // Implementation details...
}
```

### Parameters

- `functionRef` (function): The function that will be called for each element in the array. It will receive the current element as its first argument.
- `thisRef` (any, optional): The context to which the functionRef will be bound when called. If not provided, the default context will be the array itself.

### Return Value

The `group` method returns an object with groups where each key represents the result of calling `functionRef` for each element in the array. The corresponding value is an array containing all the elements that belong to that group.

### Example

```js
// Sample array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Define a function to group even and odd numbers
function groupByEvenOdd(number) {
  return number % 2 === 0 ? 'even' : 'odd'
}

// Group the numbers by even and odd
const groupedNumbers = numbers.group(groupByEvenOdd)

console.log(groupedNumbers)
/*
Output:
{
  odd: [1, 3, 5, 7, 9],
  even: [2, 4, 6, 8, 10]
}
*/
```

In this example, the `group` method is called on the `numbers` array, and it groups the numbers into two groups, `odd` and `even`, based on the result of the `groupByEvenOdd` function.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository for this package.

### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).

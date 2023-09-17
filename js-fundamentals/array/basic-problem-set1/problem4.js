// Update an array element by index.

// method 1: array index syntax method
const numbers = [1, 2, 3, 4, 5, 6];
numbers[5] = 7;
console.log(numbers);

// method 2: splice

const fruits = ["apple", "banana", "orange", "strawberry", "kiwi"];

// will replace orange with malta via concat

fruits.splice(2, 1, "Malta");
console.log(fruits);

// read more: https://www.slingacademy.com/article/javascript-update-replace-a-specific-element-in-an-array/

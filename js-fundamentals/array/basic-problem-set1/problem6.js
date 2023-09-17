//Check if an element exists in an array.
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const num1 = number.includes(5);
const num2 = number.includes(5, 6); // 2nd parameter indicates the index at which the search will start.
console.log(num1);
console.log(num2);

// read more: https://www.freecodecamp.org/news/check-if-an-item-is-in-an-array-in-javascript-js-contains-with-array-includes/#:~:text=You%20can%20use%20the%20includes,the%20item%20doesn't%20exist.

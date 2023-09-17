// Remove an element from an array by index.

const numbers = [10, 0, 1, 2, 3, 33, 4, 5, 6, 7, 8, 9, 11];

// method 1: delete at index 0 by unshift

numbers.shift();
// method 2: delete at last index using pop
numbers.pop();
// method 3: delete at any index using splice()
numbers.splice(4, 1);
console.log(numbers); // output: [0,1,2,3,4,5,6,7,8,9]

// learn about more methods:
// https://www.freecodecamp.org/news/how-to-remove-an-element-from-a-javascript-array-removing-a-specific-item-in-js/#:~:text=You%20can%20remove%20the%20element,of%20the%20element%20to%20remove.&text=The%20splice%20method%20can%20accept%20many%20arguments.

//https://www.slingacademy.com/article/how-to-remove-elements-from-an-array-in-javascript/

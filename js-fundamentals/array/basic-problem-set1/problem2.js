// Add elements to an array.

// method 1: array push
const array2 = [];
array2.push(1, 2, 3, 4, 5, 6); // can add single element or multiple element at the end of an array.
console.log(array2); //correct
console.log(array2.length); //output: 6

//method 2: array unshift

array2.unshift(11, 22, 33, "apple");
//note: can array store data of different types?
// answer: An array can be of any data type, but can only hold a single data type. Specifically, you can declare an array that holds strings and an array that holds integers, but you cannot declare a single array that holds both strings AND integers
console.log(array2);
console.log(array2.length); //output: 10

// method 3: splice method

const countries = ["Ghana", "Nigeria", "Rwanda"]; //alphabetical order add kenya and mali inside the array
//the splice() method does alter the original array. It is used for adding or removing elements from an array, and it modifies the array in place.

countries.splice(1, 0, "Kenya", "Mali"); // single or multiple elements can be added.
console.log(countries);

// method 4: concat

// The concat() method in JavaScript does not mutate or alter the original array. Instead, it creates a new array by concatenating the elements from one or more arrays with the original array or values.

const countries2 = ["Ghana", "Nigeria", "Rwanda"];

let newCountries = [].concat("Mali", countries, "Kenya");

console.log(newCountries);

// concat() method to add two array
const africanCountries = ["Ghana", "Nigeria", "Rwanda"];
const europeanCountries = ["Germany", "France", "spain"];

let countries3 = [].concat(africanCountries, europeanCountries);

console.log(countries3);

// read more: https://www.freecodecamp.org/news/how-to-insert-an-element-into-an-array-in-javascript/

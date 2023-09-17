//Concatenate two arrays.

// method 1: array concat method
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const number2 = [10, 11, 12, 13, 14, 15];
const newArray = [].concat(number2, number);
console.log(newArray); //correct

// method: spread operator(ES6)

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const merged = [...array2, ...array3, ...array1];

// method 3: push method by looping the array

// Array of Foods
const foods = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];

// Array of Drinks
const drinks = ["Water", "Coffee", "Tea", "Orange Juice", "Soda"];

for (let i = 0; i < drinks.length; i++) {
  const eachDrink = drinks[i];
  foods.push(eachDrink);
}

console.log(foods);

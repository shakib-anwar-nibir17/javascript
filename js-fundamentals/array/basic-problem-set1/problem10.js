// Reverse an array.

//method: 1 By using loop
const numbers = [1, 2, 3, 4, 5];
const numbers2 = [];

for (let i = numbers.length - 1; i >= 0; i--) {
  const reversedElements = numbers[i];
  numbers2.push(reversedElements);
}

// method 2: js built in method reverse

const numbers3 = [1, 2, 3, 4, 5];
const num4 = numbers3.reverse();
console.log(num4);

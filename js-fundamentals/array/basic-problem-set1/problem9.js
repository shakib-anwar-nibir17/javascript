//Clone an array

// method 1: by using for loop and pushing elements into an empty array
const givenArray = [1, 2, 3, 4, 5, 6];

const clonedArray = [];

for (let i = 0; i < givenArray.length; i++) {
  clonedArray.push(givenArray[i]);
}

// method 2: spread operator

const clonedArray2 = [...clonedArray];
console.log(clonedArray2);

// read more: https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/

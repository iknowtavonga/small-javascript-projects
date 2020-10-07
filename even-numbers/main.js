// First we create a function that allows us to add numbers to an array
const numbers = [23, 53, 5, 56, 12, 24, 1, 3, 223, 3, 21, 35, 8, 34, 45, 74];

// We want to arrange the numbers in ascending order
console.log(numbers.sort((a, b) => a - b));

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(`${numbers[i]} is an even number`);
  }
}

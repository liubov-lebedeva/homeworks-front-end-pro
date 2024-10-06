const inputNumber = +prompt("Input the number:");
let isNumberPrime = true;
const maxPossibleDivisor = Math.sqrt(inputNumber);
for (let i = 2; i <= maxPossibleDivisor; i++) {
    if (inputNumber % i === 0) {
        isNumberPrime = false;
        break;
    }
}
let resultString = isNumberPrime ? "The number is prime." : "The number isn't prime.";
console.log(resultString);
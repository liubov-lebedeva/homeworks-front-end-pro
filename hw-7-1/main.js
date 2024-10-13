const getSumOfNumbersFunction = () => {
    let sum = 0;
    return (num) => {
        sum += num;
        return sum;
    }
}
// Include (sum) inside the function using closures, so the state (sum) is private to that function instance, making the code reusable
const sumOfNumbers = getSumOfNumbersFunction();

console.log(sumOfNumbers(4));
console.log(sumOfNumbers(6));
console.log(sumOfNumbers(10));
console.log(sumOfNumbers(7));

// Now I can reuse this function with another variable
const anotherSumOfNumbers = getSumOfNumbersFunction();

console.log(anotherSumOfNumbers(10));
console.log(anotherSumOfNumbers(4));
console.log(anotherSumOfNumbers(10));
console.log(anotherSumOfNumbers(2));

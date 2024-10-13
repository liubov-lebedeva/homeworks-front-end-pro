multiplyNumbers = (a) => {
    return (b) => {
        return a * b;
    };
}

console.log(multiplyNumbers(3)(4));
console.log(multiplyNumbers(10)(4));
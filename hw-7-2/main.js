multiplyNumbers = (a) => {
    return (b) => {
        return a * b;
    };
}

console.log(multiplyNumbers(3)(4));
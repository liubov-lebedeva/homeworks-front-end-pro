function getArithmeticMean(array) {
    let numbersSum = 0;
    let numbersAmount = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !isNaN(array[i])) {
            numbersAmount++;
            numbersSum += array[i];
        }
    }
    return numbersSum / numbersAmount;
}

console.log(getArithmeticMean([1, 2, 'a', NaN, true, 1n, [], {}, undefined, null]));
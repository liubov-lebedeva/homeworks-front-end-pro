const threeDigitNumber = prompt("Enter the three-digit number:");
let sameDigits = 0;
for (let i = 0; i < 3; i++) {
    for (let j = i + 1; j < 3; j++) {
        if (threeDigitNumber[i] === threeDigitNumber[j]) {
            sameDigits++;
        }
    }
}
if (sameDigits === 3) {
    console.log(`All digits of this number are the same.`);
} else if (sameDigits === 0) {
    console.log(`This number doesn't contain identical digits.`);
} else {
    console.log(`This number contains two identical digits.`);
}

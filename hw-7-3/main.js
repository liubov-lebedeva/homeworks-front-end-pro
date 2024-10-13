function consoleLogUserInput() {
    let userInput = prompt("Please enter a number greater than 100:");

    for (let attemptIndex = 1; attemptIndex < 10; attemptIndex++) {
        let userNumber = +userInput;
        if (userNumber > 100 || isNaN(userNumber)) {
            break;
        } else {
            userInput = prompt("Please try again:");
        }
    }
    console.log(userInput);
    return;
}

consoleLogUserInput();
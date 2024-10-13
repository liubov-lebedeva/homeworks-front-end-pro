const inputString = prompt("Input string:");
const inputSymbols = prompt("Input comma-separated symbols:");
const arrayOfSymbols = inputSymbols.split(",");


const removeSymbols = (line, symbols) => {
    let resultString = "";
    for (let i = 0; i < line.length; i++) {
        if (symbols.includes(line[i])) {
            resultString += "";
        } else {
            resultString += line[i];
        }
    }
    return resultString;
}

console.log(removeSymbols(inputString, arrayOfSymbols));
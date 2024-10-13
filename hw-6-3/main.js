const numbersArray = [1, 2, 3, 3, 4, 5, 5, 5, 5, 6, 'a'];


function removeElement(array, item) {
    let indexOfItem = array.indexOf(item);
    while (indexOfItem !== -1) {
        array.splice(indexOfItem, 1);
        indexOfItem = array.indexOf(item);
    }
    return array;
}

console.log(removeElement(numbersArray, 3));
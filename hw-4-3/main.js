let userAge = "";
let userCountry = "";
let userFavSportsman = "";
const userBirthYear = +prompt("What year were you born?");
const userCity = prompt("What city do you live in?");
const userSport = prompt("What's your favorite sport?");

if (!userBirthYear) {
    alert("It's a pity that you don't want to enter your birth year.");
} else if (userBirthYear > 2024) {
    alert("It's a pity that you don't want to enter your birth year.");
} else if (typeof userBirthYear === 'number') {
    userAge = 2024 - userBirthYear;
} else {
    userAge = "";
}

if (!userCity) {
    alert("It's a pity that you didn't want to enter your residence city.");
} else if (userCity === " ") {
    alert("It's a pity that you didn't want to enter your residence city.");
}

if (!userSport) {
    alert("It's a pity that you didn't want to enter your favorite sport.");
} else if (userCity === " ") {
    alert("It's a pity that you didn't want to enter your favorite sport.");
}

switch (userCity) {
    case "Kyiv":
        userCountry = "You live in the capital of Ukraine";
        break;
    case "Washington":
        userCountry = "You live in the capital of USA";
        break;
    case "London":
        userCountry = "You live in the capital of England";
        break;
    case "":
        userCountry = "";
        break;
    case " ":
        userCountry = "";
        break;
    case null:
        userCountry = "";
        break;
    default:
        userCountry = `You live in the ${userCity}`;
}

switch (userSport) {
    case "Tennis":
        userFavSportsman = "Cool! Do you want to become like Carlos Alcaraz?"
        break;
    case "Biathlon":
        userFavSportsman = "Cool! Do you want to become like Martin Fourcade?"
        break;
    case "Athletics":
        userFavSportsman = "Cool! Do you want to become like Usain Bolt?"
        break;
    default:
        userFavSportsman = "";
}

alert(
    `${userAge}
    ${userCountry}
    ${userFavSportsman}`
)
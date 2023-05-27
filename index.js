// Code your solution here

function findMatching(drivers, string) {
    return drivers.filter(function (driverName) {
        return driverName.toLowerCase() === string.toLowerCase();
    });
}

function fuzzyMatch(arrayOfDrivers, letters) {
    let lengthOfLetters = letters.length;
    return arrayOfDrivers.filter(function (name) {
        return name.slice(0, lengthOfLetters) === letters;
    });
}

function matchName(arrayOfDrivers) {
    let newArray = arrayOfDrivers.filter((name) => {
        if (name.name === "Bobby") {
            return name
        }
    })
    return newArray
}

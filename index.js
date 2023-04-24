// Code your solution here

function findMatching(drivers, string) {
    return drivers.filter(function (driverName) {
        return driverName.toLowerCase() === string.toLowerCase();
    });
}

// function fuzzyMatch(arrayOfDrivers, string) {
//     let newArray = arrayOfDrivers.filter((name) => {
//         let newArray2 = arrayOfDrivers.filter((name) => {
//             if (name[0] === "S") {
//                 return newArray
//             } else if (name[0] === "T") {
//                 return newArray2
//             }
//         })
//     })
//     return newArray
// }


function fuzzyMatch(arrayOfDrivers, string) {
    let newArray = arrayOfDrivers.filter((name) => {
        if (name[0] === string) {
            return name
        } else if (name[0] != string) {
            return false
        }
    })
    return newArray
}

function matchName(arrayOfDrivers) {
    let newArray = arrayOfDrivers.filter((name) => {
        if (name.name === "Bobby") {
            return name
        }
    })
    return newArray
}

// Exercise #3: Advanced
// Aim: Create a function that takes an object and returns the keys and 
//values as separate arrays. Return the keys sorted alphabetically and their 
//corresponding values in the same order.


// declaring an object with keys and values
let person = {
    name: "Cosmo",
    age: 46,
    occupation:  "Bus Driver",
    workYears: 15,
    hobby: "Crayons",
    favoriteNumber: 23
};

//found this on google - turned object key & values into arrays
let personValues = Object.values(person);
personValues.sort();
let personKeys = Object.keys(person);
personKeys.sort();


console.log(personValues);
console.log(personKeys);
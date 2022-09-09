// demo 1 arrays

// array stores data in list style

const myArray = [1, "test", false, { name: "Chris", age: 33 }]

const firstItem = myArray[0];
console.log("First item: ", firstItem);

const lastItem = myArray[myArray.length-1];
console.log("last item: ", lastItem);

const myArray2 = new Array("item", "item2", "item3");
console.log("myArray2: ", myArray2);

//

const myArray3 = new Array(100);
console.log("myArray3: ", myArray3);  // will give an array with 100 empty item


// filter()
    // demo of studen array methods with filter()
    // using arrow function (es6)
    // need to paly around wtih arrow functions
    // outcome? used to grab those that had an score higher than declared value 

// map()
    // in demo, more es6 arrow function
    // outcome? added in a new key-value pair: transform data inside an array

// sort()
    //sort () - passing in two arguments in demo, and then using arrow es6
    // to use those variables and assigning to key-value of the array (to sort)
    // by grade

// find()
    // in demo, will find the exact key-value we passed into it

// for each()
    // looks like way to loop through all array values and then do X (whatever you declare)

// some()
    // similar to find, but instead of object/array values - returns true or false!
    // will report true or false if there is a value that matches condition

// every()
    // similar to some() but is looking for ALL values in array to determine
        // true or false
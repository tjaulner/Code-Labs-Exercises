// objects stor data grouped together in key-value pairs


// object example

const myObject = {
    key: "Value",
    nestedInfo: {
        nestedKey: "Nested Value",
        age: 42,
        location: {
            state: {
                name: "Missouri",
                initials: "MO"
            },
        },
    },
    createdAt: new Date(),
    someMethod: function(text = "hello") {
        console.log(text);
    },
};

const bestState = myObject.nestedInfo.location.state.name; // getting "missouri"

const objCreation = myObject["createdAt"]; // this is bracket notation to grab that object key value

myObject.someMethod(); // if console, will print hello
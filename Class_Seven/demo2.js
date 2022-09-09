// closures demo 2 

function greeting(greeting) {
    return function (name) {
        return `${name}! ${greeting}`;
    };
}

const basicWelcome = greeting("welcome.")

console.log("basicWelcome: ", basicWelcome("Jerk")); // outcome should be Jerk Welcome

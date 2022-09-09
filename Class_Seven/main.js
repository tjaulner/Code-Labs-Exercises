// review Node JS install (old version?)

// -- Closures --

function outer() {
    let myVariable = "Outer Function Variable";

    function inner() {
        console.log("myVariable inside the inner function: ", myVariable);
    }

        return inner;
}

const outerFunctionCall = outer();

outerFunctionCall();
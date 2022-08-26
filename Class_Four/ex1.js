//Exercise #1: Basic
//Aim: Create a button that changes the background and text color randomly when clicked

//grab the button
//const buttonThing = document.querySelector(".btnChange");
//console.log(buttonThing);

// random color variable assigns random color to this variable
// randomcolor2 does the same, but can be used separately

// the two document.body are what we are assigning the two change color
//variables to. RandomColor2 goes with the second, which changes the text.

function changeColor () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
    document.body.style.color = `#${randomColor2}`;
}

const buttonListener = document.querySelector(".btnChange");
buttonListener.addEventListener("click", changeColor);

//Exercise #1: Basic
//Aim: Create a button that changes the background color when clicked

console.log("hello");

function changeColor () {
    //const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    //const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#50975c";
    //document.body.style.color = `#${randomColor2}`;
    //console.log(randomColor, randomColor2);
    
}


buttonListener.addEventListener("click", changeColor);ß
const buttonListener = document.querySelector(".btn");
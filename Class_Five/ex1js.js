//  Aim: Create an application that prints out users information on submission of a form and 
    // saves the results to local storage
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//--****-GLOBAL VARIABLES-------
const allList = JSON.parse(localStorage.getItem("Print_List")) || [];

//--^^^--Grab HTML Elements--------
const input = document.querySelector(".inputBox");
const form = document.querySelector(".nameForm");
const printList = document.querySelector(".printout");

//--^^^--Functions--------
function createName(e) {
    // ------prevent form from submitting
    e.preventDefault();
    const firstName = input.value;  //grabs input information
    allList.push(firstName); // adds to the array?
    const newName = document.createElement("p"); //variable for creating a P element
    newName.innerText = firstName; 
    printList.appendChild(newName); // taking created inner text and adding to container in HMTL
    form.reset(); // last thing, this resets the form back to blank
}

// save data to local storage - as of 08/29, cant get this to print to storage (*yet)
function saveNameToLocalStorage() {
    localStorage.setItem("Print_List", JSON.stringify(firstName));
}


//--^^^--Event Listeners-------
form.addEventListener("submit", createName);
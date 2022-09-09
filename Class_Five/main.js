//--****-GLOBAL VARIABLES-------
const allLinks = JSON.parse(localStorage.getItem("Link_List")) || [];

//--****-HTML ELEMENT SELECTORS-------------
const body = document.body;
const input = document.querySelector(".link-input");
    //const overlay = document.querySelector(".overlay"); // not needed wtih focusout event listener

const form = document.querySelector("#link-form");
const linkList = document.querySelector(".link-list");  

//--****-EVENT LISTENERS------------
// focus event on input
input.addEventListener("focus", focusInput);
// event listener for click
    //input.addEventListener("click", endFocus);

//another way to do this event listener
input.addEventListener("focusout", endFocus); // same thing as the "click end focus")

// listen for submit event on form & runs the createLink function
form.addEventListener("submit", createLink);

//--****-ON APPLICATION START--------------------
populateLinkList(allLinks);

//--****-FUNCTIONS FUNCTIONS--------------------
//function:  adds the focus form class to the body when form input in focus
function focusInput() {
    body.classList.add("focus-form");
}

//function:  that removes the input form focus (undo what focusInput function does)
function endFocus(){
    if(body.classList.contains("focus-form")) {
        body.classList.remove("focus-form");   
    }
}

//function: create a new link when url is submitted
function createLink(e) {
    e.preventDefault();
    // grab info from input box
    const url = input.value 
    // add new link to allLinks array
    allLinks.push(url);
    populateLinkList(allLinks);
    // save links to local storage
    saveLinkToLocalStorage(allLinks);
    // ------create a bookmark -- this segment of code was re-written with function
            //populateLinkList
        //const linkContainer = document.createElement("li");
        //const newLink = document.createElement("a");
        //newLink.className = "link";
        //newLink.innerText = url;
        //newLink.href = url;
        //newLink.target = "_blank";
    // -----------dynamicaly insert into HTML
        //linkContainer.appendChild(newLink);
        //linkList.appendChild(linkContainer);
    // reset form
    form.reset();
}

function populateLinkList(links = []) {
    // loop over all links & create new bookmark for each element
    linkList.innerHTML = links.map(
        (link) => `<li><a class="link" href=${link} target="_blank">${link}</a></li>`
    )
    .join("");
}

function saveLinkToLocalStorage(links = []) {
    localStorage.setItem("Link_List", JSON.stringify(links));
}
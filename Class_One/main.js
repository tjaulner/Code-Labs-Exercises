    // this is a comment
    // Selects the first <h1> element
    const headingOne = document.querySelector("h1");
    
    // Selects the element with the class name "heading-two"
    const headingTwo = document.querySelector(".heading-two");

    // Selects the body element
    const bodyEl = document.querySelector("body");

    // Changes "headingOne" variable's text content.
    headingOne.innerText = "Updated from Javascript!";  //remember this .innerText

    // Changes "headingTwo" variable's text color.
    headingTwo.style.color = "blue";

    // Changes the background of hte body and the text color
    function updateColors() {
        bodyEl.style.backgroundColor = "#0c4a6e";
        headingOne.style.color = "#f0f9ff";
        headingTwo.style.color = "#7dd3fc";
    }


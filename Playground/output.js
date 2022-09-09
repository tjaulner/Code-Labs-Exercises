//jquery below - same function as lines 10 thru 27 of regular JS
$(function() {
    $("nav a").on("click", function(){
        $(".output section").hide();
        $($(this).attr("href")).show();
    })
});

// const navItem grabs the nav items
//const navItem = document.querySelectorAll("nav a");

// this is the function for the actual click in the nav bar
// function navClick (e) {
//     const sections = document.querySelectorAll(".output section"); // this hides all output items
//     const activeSection = document.querySelector(e.srcElement.getAttribute("href")); // this grabs the active display
    
//     sections.forEach(element => {
//         element.style.display = "none";
//     });

//     activeSection.style.display = "block"; // this actually shows the active display
// }

//this loop runs through the nav items
// navItem.forEach(item => {
//     item.addEventListener("click", navClick);
// })
////////////////////////////////////////////////////////////////////////////////////////

// ------------------------------price calculator------------------------------
// create functions that we need

const priceInput = document.querySelector(".price");
const quantityInput = document.querySelector(".quantity");
const total = document.querySelector(".total");
const quantityLabel = document.querySelector(".quantity-label");

function calculateTotalCost() {
    const price = priceInput.value;
    const quantity = quantityInput.value;
    const totalPrice = price * quantity;
    total.innerText = totalPrice.toFixed(2);
}

function updateQuantityLabel () {
    const quantity = quantityInput.value;
    quantityLabel.innerText = quantity;
}

// add our event listeners
priceInput.addEventListener('input', calculateTotalCost);
quantityInput.addEventListener('input', calculateTotalCost);
quantityInput.addEventListener('input', updateQuantityLabel);

updateQuantityLabel();

//   ------------------------ Crazy Button -------------------------------
// grabbing html button
const crazyButton = document.querySelector(".crazybtn");

// function
function goWild() {
    const boxHeight = document.querySelector(".output").clientHeight;
    const boxWidth = document.querySelector(".output").clientWidth;
    
    const fromTop =
        Math.random() * (boxHeight - crazyButton.clientHeight);
    const fromLeft =
        Math.random() * (boxWidth - crazyButton.clientWidth);
    
    crazyButton.style.top = fromTop + "px";
    crazyButton.style.left = fromLeft + "px";
    console.log(fromTop, fromLeft);
}

// event listener
crazyButton.addEventListener("mouseover", goWild);
crazyButton();
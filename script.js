let number = document.getElementById("inputedNumber");
let range = document.getElementById("range");

range.addEventListener("pointermove", inputChange);

function inputChange() {
    number.innerText = range.value;
}
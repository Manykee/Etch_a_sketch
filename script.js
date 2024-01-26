let number = document.getElementById("inputedNumber");
let range = document.getElementById("range");


range.addEventListener("pointermove", inputChange);

function inputChange() {
    number.innerText = range.value;
}
































/*function createDiv(number) {
    const container = document.getElementById("drawBoard");
    for (let i = 0; i < number; i++) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "innerDiv");
        container.appendChild(newDiv);
    };
};*/
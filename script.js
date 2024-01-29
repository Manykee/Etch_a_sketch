let number = document.querySelector("#inputedNumber");
let range = document.querySelector("#range");
const container = document.querySelector("#drawBoard");


range.addEventListener("pointermove", inputChange);

function inputChange() {
    number.innerText = range.value;
}
range.addEventListener("change", divNumber);

function divNumber() {
    removeAllChild(container);
    createDiv((range.value)**2);
}

function createDiv(number) {
    
    for (let i = 0; i < number; i++) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "innerDiv");
        container.appendChild(newDiv);
    };
};

function removeAllChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
let number = document.querySelector("#inputedNumber");
let range = document.querySelector("#range");
const container = document.querySelector("#drawBoard");
const rangeNumber = range.value.toString;

range.addEventListener("pointermove", inputChange);

function inputChange() {
    number.innerText = range.value;
    
}
range.addEventListener("change", divNumber);

function divNumber() {
    removeAllChild(container);
    createDiv((range.value)**2);
    divSizeAllocation(range.value);
}

function createDiv(number) {
    
    for (let i = 0; i < number; i++) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "innerDiv");
        container.appendChild(newDiv);
    };
};
    

function divSizeAllocation(number) {
    for(let i = 0; i < number**2; i++) {
        const divSize = document.querySelectorAll(".innerDiv");
        divSize[i].style.width = 500 / number + "px";
        divSize[i].style.height = 500 / number + "px";
    }
}

function removeAllChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
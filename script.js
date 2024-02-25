let number = document.querySelector("#inputedNumber");
let range = document.querySelector("#range");
const container = document.getElementById("drawBoard");
const rangeNumber = range.value.toString;
const inpColor = document.querySelector("#colorInput");
const innDiv = document.querySelectorAll('.innerDiv');
const selectColor = document.querySelector("#selectedColor");
const reset = document.querySelector("#resetBtn");
const eraser = document.querySelector("#eraser");
const increment = document.querySelector("#increment");


//Show the imputed number
range.addEventListener("pointermove", inputChange);

function inputChange() {
    number.innerText = range.value;
    
}
range.addEventListener("change", divNumber);

//Create and reset the number of Inner Div to coincide with the inputed number
function divNumber() {
    removeAllChild(container);
    createDiv((range.value)**2);
    divSizeAllocation(range.value);
}

function createDiv(number) {
    
    for (let i = 0; i < number; i++) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "innerDiv");
        newDiv.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = inpColor.value;
        });
        container.appendChild(newDiv);
    };
};
    
function removeAllChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//Set the size of the inner divs.
function divSizeAllocation(number) {
    for(let i = 0; i < number**2; i++) {
        const divSize = document.querySelectorAll(".innerDiv");
        divSize[i].style.width = 500 / number + "px";
        divSize[i].style.height = 500 / number + "px";
    }
}

//Change the color according to the selected
innDiv.forEach((div)=> {
    div.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = inpColor.value;
    });
});

inpColor.addEventListener("change", () => {
    selectColor.style.backgroundColor = inpColor.value;
});

reset.addEventListener("click", () => {
    innDiv.forEach(div => {
        div.style.backgroundColor = "lightgray";
    });
    container.childNodes.forEach(div => {
        div.style.backgroundColor = "lightgray";
    });
});

eraser.addEventListener("click", () => {
    inpColor.value = "#d3d3d3";
    selectColor.style.backgroundColor = "lightgray";
});

//gray increment event listener
increment.addEventListener("click", () => {
    innDiv.forEach(div => {
        div.style.backgroundColor = "black";
        div.style.opacity = "0.01"
        selectColor.style.backgroundColor = "lightgray";
        div.addEventListener('mouseover', (e) => {
            const currentOpacity = div.style.opacity;
            e.target.style.backgroundColor = "black";
            e.target.style.opacity = (Number(currentOpacity) + 0.02);
        });
    });
});
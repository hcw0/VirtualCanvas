let mousePress = false;
let eraserToggler = false;

let setGridSize = (size) => {
    let parent = document.querySelector(".canvas-container");
    document.querySelector(".canvas").remove();
    let gridContainer = document.createElement("div");
    gridContainer.classList.add("canvas");
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    parent.append(gridContainer);

    for(let i = 0; i < size * size; i++){
        let gridItem = document.createElement("div");
        gridItem.style.cssText = "outline: 1px solid #C5C5C5; background-color: white";
        gridItem.addEventListener("click", () => {
            if(eraserToggler){
                gridItem.style.cssText = `outline: 1px solid #C5C5C5; background-color: white`;
            } else{
                gridItem.style.cssText = `background-color: ${color_selector.value}`;
            }

        });
        gridItem.addEventListener("mousemove", () => {
            if(mousePress && eraserToggler){
                gridItem.style.cssText = `outline: 1px solid #C5C5C5; background-color: white`;
            } else if(mousePress && !eraserToggler){
                gridItem.style.cssText = `background-color: ${color_selector.value}`;
            }
        })
        gridContainer.append(gridItem);
    }
}

let body = document.querySelector("body");


let setMousePressTrue = () => mousePress = true;
let setMousePressFalse = () => mousePress = false;
body.onmousedown = setMousePressTrue;
body.onmouseup = setMousePressFalse;

let color_selector = document.getElementById("color-selector");
let changeBackground = () => {
    color_selector.style.backgroundColor = color_selector.value;
    color_selector.style.background = color_selector.value;
}

color_selector.onchange = changeBackground;
color_selector.oninput = changeBackground;

let slider = document.querySelector(".slider");
slider.oninput = () => {
    document.querySelector(".grid-size-display").remove();
    let p = document.createElement("p");
    p.classList.add("grid-size-display");
    p.textContent = `${slider.value} x ${slider.value}`;
    document.querySelector(".slider-container").insertBefore(p, slider);
    setGridSize(slider.value);
}

let setEraserToggler = () => eraserToggler ? eraserToggler = false : eraserToggler = true;

let eraserButton = document.querySelector(".eraser");
eraserButton.addEventListener("click", () => setEraserToggler());

setGridSize(16);


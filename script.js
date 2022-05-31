let mousePress = false;

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
            gridItem.style.cssText = `background-color: ${color_selector.value}`;
        });
        gridItem.addEventListener("mousemove", () => {
            if(mousePress){
                gridItem.style.cssText = `background-color: ${color_selector.value}`;
            }
        })
        gridContainer.append(gridItem);
    }
}

let body = document.querySelector("body");


let setTrue = () => mousePress = true;
let setFalse = () => mousePress = false;
body.onmousedown = setTrue;
body.onmouseup = setFalse;

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

setGridSize(16);


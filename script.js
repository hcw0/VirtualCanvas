let mousePress = false;
let eraserToggler = false;
let rainbowToggler = false;

let setGridSize = (size) => {
    let parent = document.querySelector(".canvas-container");
    document.querySelector(".canvas").remove();
    let gridContainer = document.createElement("div");
    gridContainer.addEventListener("mousedown", () => mousePress = true);
    gridContainer.addEventListener("mouseup", () => mousePress = false);
    // gridContainer.addEventListener("mouseleave", () => mousePress = false);
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
            } else if(rainbowToggler){
                let randomColor = Math.floor(Math.random()*16777215).toString(16);
                gridItem.style.cssText = `outline: 1px solid #C5C5C5; background-color: #${randomColor}`;
            } else{
                gridItem.style.cssText = `background-color: ${color_selector.value}`;
            }

        });
        gridItem.addEventListener("mousemove", () => {
            if(mousePress && eraserToggler){
                gridItem.style.cssText = `outline: 1px solid #C5C5C5; background-color: white`;
            } else if (mousePress && rainbowToggler){
                let randomColor = Math.floor(Math.random()*16777215).toString(16);
                gridItem.style.cssText = `outline: 1px solid #C5C5C5; background-color: #${randomColor}`;
            } else if(mousePress && !eraserToggler){
                gridItem.style.cssText = `background-color: ${color_selector.value}`;
            }
        })
        gridContainer.append(gridItem);
    }
}
setGridSize(16);

let setMousePressTrue = () => mousePress = true;
let setMousePressFalse = () => mousePress = false;


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
eraserButton.addEventListener("click", () => {
    if(rainbowToggler){
        setRainbowToggler();
        rainbowButton.classList.toggle("active");
    }
    setEraserToggler();
    eraserButton.classList.toggle("active");
});

let setRainbowToggler = () => rainbowToggler ? rainbowToggler = false : rainbowToggler = true;
let rainbowButton = document.querySelector(".rainbow");
rainbowButton.addEventListener("click", () => {
    if(eraserToggler){
        setEraserToggler();
        eraserButton.classList.toggle("active");
    }
    setRainbowToggler();
    rainbowButton.classList.toggle("active");
});


let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    let children = document.querySelector(".canvas").childNodes;
    children.forEach(child => {
        child.style.cssText = `outline: 1px solid #C5C5C5; background-color: white`;
    });
})
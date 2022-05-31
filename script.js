let setGridSize = (size) => {
    let gridContainer = document.querySelector(".canvas");
    for(let i = 0; i < size * size; i++){
        let gridItem = document.createElement("div")
        gridItem.style.cssText = "outline: 1px solid #C5C5C5; background-color: white";
        gridContainer.append(gridItem);
    }
}

setGridSize(16);
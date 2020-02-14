const createBtn = document.querySelector("#createGrid");
createBtn.addEventListener("click", createGrid);

function createGrid() {
    const container = document.querySelector("#container");
    const userInputGridSize = parseInt(prompt("How big should the grid's sides be?"));
    const gridSize = userInputGridSize * userInputGridSize;
    
    container.style.gridTemplateColumns =  "repeat(" + userInputGridSize + ", 1fr";
    container.style.gridTemplateRows =  "repeat(" + userInputGridSize + ", 1fr";

    // Clear Etch-a-Sketch
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Create new Etch-a-Sketch
    for(let i = 0; i < gridSize; i++) {
        const div = document.createElement("div");

        div.setAttribute("id", "divGrid");

        container.appendChild(div);
        div.addEventListener("mouseover", mouseOver);
    }
}

function mouseOver() {
    this.style.backgroundColor = "black";
}
const container = document.getElementById("container");
const squareNumber = document.getElementById("squareNumber");

squareNumber.addEventListener('click', () => {
    height = prompt("How tall you want the grid to be? (Max. 100)", "20");
    width = prompt("How tall you want the grid to be? (Max. 100)", "20");
    createNewGrid(height, width);
});

function createNewGrid(height, width) {
    for (let i = 0; i < height; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < width; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
        container.appendChild(row);
    }
    const squares = document.getElementsByClassName("square")
    const squaresArray = Array.from(squares);

    squaresArray.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "grey";
        });
    });
}


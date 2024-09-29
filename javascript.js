const gridside = 600;
const columns = 16;
const rows = 16;

const sketchArea = document.querySelector("#sketch-area");

function createGridCell() {
    for (i = 0; i < (rows * cells); i++) {
        const gridCell = document.createElement('div');
        
        gridCell.style.width = `${(gridside / columns) - 2} px`;
        gridCell.style.height = `${(gridside / rows - 2)} px`;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);
    }
}

createGridCell();
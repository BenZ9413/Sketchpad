// Code which is executed after the page is loaded
const containerSize = 520;
createGrid(16);

// Create the start Grid for the Sketchpad 16x16
function createGrid (numberOfSquares) {
    // Create container for the grid which keeps its height and width
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.setAttribute('style', `height: ${containerSize}px; width: ${containerSize}px; border: 3px solid black`);
    // loop to create the needed amount of squares
    const squareSize = Math.floor(containerSize / numberOfSquares*10)/10;
    console.log(squareSize);
    for (let i = 0; i < numberOfSquares; i++) {
        const containerRow = document.createElement('div');
        containerRow.classList.add('row');
        for (let x = 0; x < numberOfSquares; x++) {
            const square = document.createElement('div');
            square.setAttribute('style', `min-height: ${squareSize}px;min-width: ${squareSize}px`);
            containerRow.appendChild(square);
        };
        container.appendChild(containerRow);
    }
    body.appendChild(container);
}
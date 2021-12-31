// Code which is executed after the page is loaded
createStartGrid();

// Create the start Grid for the Sketchpad 16x16
function createStartGrid () {
    // Create container for the grid which keeps its height and width
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.setAttribute('style', 'height: 520px; width: 520px; border: 3px solid black');
    body.appendChild(container);
    // loop to create the needed amount of squares
}
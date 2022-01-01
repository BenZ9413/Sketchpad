// Code which is executed after the page is loaded
const containerSize = 520;
createGrid(16);


// Create the start Grid for the Sketchpad 16x16
function createGrid (numberOfSquares) {
    // Create container for the grid which keeps its height and width
    const gridColumn = document.querySelector('.gridColumn');
    const container = document.createElement('div');
    container.setAttribute('style', `height: ${containerSize}px; width: ${containerSize}px; border: 3px solid black`);
    // loop to create the needed amount of squares
    const squareSize = Math.floor(containerSize / numberOfSquares*10)/10;
    for (let i = 0; i < numberOfSquares; i++) {
        const containerRow = document.createElement('div');
        containerRow.classList.add('row');
        for (let x = 0; x < numberOfSquares; x++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('style', `min-height: ${squareSize}px;min-width: ${squareSize}px`);
            square.setAttribute('id', `row${i}column${x}`);
            containerRow.appendChild(square);
        };
        container.appendChild(containerRow);
    };
    gridColumn.appendChild(container);
    hoverSetup();  
    newGame();
    refresh();
    schatzMode();
};

// setup the hover event for the squares
function hoverSetup () {
    const squares = document.querySelectorAll('.square');
    squares.forEach (item => {
        item.addEventListener('mouseover', function(e) {
            changeColorOfSquare(e);
        });
    });
};

// change the color of the square
function changeColorOfSquare (e) {
    const hoveredSquare = document.querySelector(`#${e.target.id}`);
    hoveredSquare.classList.add('hovered');
};

// Asks user for input of grid size and starts a new game
function newGame() {
    const newGameButton = document.querySelector('#newGrid');
    newGameButton.addEventListener('click', restructure);
};

// remove old structure and create the new one
function restructure () {
    let newGridSize = Number(prompt('What grid size do you want (max 100)?'));
    if (isNaN(newGridSize)) {
        alert('NOT A NUMBER! Please try again.');
    } else {
        const newGameButton = document.querySelector('#newGrid');
        newGameButton.removeEventListener('click', restructure);
        deleteCurrentGrid();
        if (newGridSize > 100) newGridSize = 100;
        createGrid(newGridSize);
    };
};

// delete the current grid
function deleteCurrentGrid () {
    const gridColumn = document.querySelector('.gridColumn');
    while (gridColumn.firstChild) {
        gridColumn.removeChild(gridColumn.lastChild);
    };
};

// refreshes the grid
function refresh() {
    const refreshButton = document.querySelector('#refresh');
    refreshButton.addEventListener('click', function(e) {
        const squares = document.querySelectorAll('.square');
        squares.forEach (item => {
            item.classList.remove('hovered');
        });
    });
};

// Bei Rechtsklick malt man nurnoch, wenn man die linke Maustaste gedrückt hält
function schatzMode() {
    const body = document.querySelector('body');
    body.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        alert('I love you!');
        return false;
    }, false);
};
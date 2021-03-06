/*
//primo giorno: fare la parte grafica
//secondo giorno: fare la parte javascript
const play = document.querySelector('.play');
const grid = document.getElementById('grid');
const select = document.getElementById ('level');
let numin = 1;
let numax = 100;

//cambio di livello

select.addEventListener('change', function(){
    console.log('inizio gioco');
    let level = select.value;
    console.log('scelta livello', level);

    changelvl(level, numax);
});

//in base al livello scelgo il numero di celle

function changelvl(lvl, numCells) {
    if (lvl == 1) {
        numCells = 100;
    }
    else if (lvl == 2) {
        numCells = 81;
    }
    else {
        numCells = 49;
    }
    console.log(numCells);
    return numCells;
}
RESTART
*/

const play = document.getElementById('play');
const containerGrid = document.getElementById('container');
play.addEventListener('click', function () {
    container.innerHTML = '';

    const value = document.getElementById('level').value;

    let col = 0;
    let row = 0;

    if (value == 'padawan') {
        row = 10;
        col = 10;
    }
    else if (value == 'jedi') {
        row = 9;
        col = 9;
    }
    else if (value == 'masterjedi') {
        row = 7;
        col = 7;
    }

    let numberSquare = row * col;
    for (let i = 0; i < numberSquare; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100% / ${col})`;
        square.style.height = `calc(100% / ${row})`;
        square.append(i + 1);
        containerGrid.append(square);
        square.addEventListener('click', function () {
            this.classList.add('clicked');
        })
    }
})

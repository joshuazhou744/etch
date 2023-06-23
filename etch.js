const container = document.getElementById('container');
const flex = document.getElementById('flex');

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-box";
        cell.addEventListener('mouseover', () => {
            cell.classList.add('draw')
        });
    };
};

makeRows(48, 48)

const button = document.createElement('button');
button.classList.add('button');
button.textContent = "Change Canvas Size";
flex.appendChild(button);

button.addEventListener('click', () => {
    let width = prompt("Canvas width");
    let length = prompt("Canvas length");
    alert('grid messed up, the function only works the first time')
    makeRows(width, length);
});

const clear = document.createElement('button');
clear.classList.add('button');
clear.textContent = "Clear Canvas";
flex.appendChild(clear);

clear.addEventListener('click', () => {
    alert('no clear function lol')
});
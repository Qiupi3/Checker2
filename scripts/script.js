const board = document.querySelector('#checkerboard');

let cells = [
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
];

cells.forEach((cell, index) => {
    const box = document.createElement('div');
    box.classList.add('cell');
    const row = Math.floor(index / 8);
    const col = index % 8;
    if ((row + col) % 2 === 0) {
        box.classList.add('light');
    } else {
        box.classList.add('dark');
    }
    board.appendChild(box);
});
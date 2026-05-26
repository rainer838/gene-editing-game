const letters = [
    ['C','R','I','S','P','R','A','B','C','D'],
    ['E','D','I','T','I','N','G','E','F','G'],
    ['D','N','A','H','I','J','K','L','M','N'],
    ['G','E','N','E','O','P','Q','R','S','T'],
    ['M','U','T','A','T','I','O','N','U','V'],
    ['W','X','Y','Z','A','B','C','D','E','F'],
    ['G','E','N','O','M','E','G','H','I','J'],
    ['K','L','M','N','O','P','R','N','A','Q'],
    ['A','L','L','E','L','E','R','S','T','U'],
    ['V','W','X','Y','Z','A','B','C','D','E']
];

const grid = document.getElementById("grid");

for(let row = 0; row < letters.length; row++) {
    for(let col = 0; col < letters[row].length; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = letters[row][col];
        grid.appendChild(cell);
    }
}
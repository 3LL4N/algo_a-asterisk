const generateButton = document.getElementById("generate")
generateButton.addEventListener("click", validateForm)

function validateForm() {
    const cols = document.getElementById("cols").value
    const rows = document.getElementById("rows").value

    if (isNaN(cols) || isNaN(rows)) {
        alert("Columns/Rows needs to be a number!")
        return false
    }

    generateMap()
}

function Cell() {
    this.g = 0
    this.h = 0
    this.f = 0
}

function generateMap() {
    const cols = document.getElementById("cols").value
    const rows = document.getElementById("rows").value
    const grid = new Array(cols);

    for (let i = 0; i < cols; i++) {
        grid[i] = new Array(rows)
    }

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = new Cell()
        }
    }

    const mapDiv = document.getElementById("map")
    mapDiv.innerHTML = `
    <h2>Columns = ${cols}</h2>
    <h2>Rows = ${rows}</h2>
    `
}

// function setup() {
//     createCanvas(400, 400)
// }

// function draw() {
//     background(0)
// }

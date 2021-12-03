const column = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
function Board() {
  this.layout = document.getElementById("chessboard");
  this.create = function () {
    for (let rowId = 8; rowId >= 0; rowId--) {
      this.row = document.createElement("div");
      this.row.className = "row";
      this.row.setAttribute('id', `${rowId}`);
      this.layout.appendChild(this.row);
      this.addSquareToRow(rowId);
    }
  }
  this.addSquareToRow = function (rowId) {
    this.rowId = document.getElementById(`${rowId}`)
    for (let columnId = 0; columnId <= 8; columnId++) {
      this.square = document.createElement("div");
      this.square.className = "square";
      this.square.setAttribute('id', `${column[columnId]}${rowId}`);
      this.rowId.appendChild(this.square);
      if (rowId !== 0) {
        if (columnId === 0) {
        } else if ((rowId + columnId) % 2 === 0) {
          this.square.classList.add("black")
        } else {
          this.square.classList.add("white")
        }
      }
    }
  }
  this.changeSquareColor = function (x, y) {
    document.getElementById(`${column[x]}${y}`).style.backgroundColor = "yellow"
  }
}

//jesus
const board = new Board();
board.create();

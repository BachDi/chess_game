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
      rowId * columnId !== 0 && ((rowId + columnId) % 2 === 0 ? this.square.classList.add("black") : this.square.classList.add("white"))
    }
  }
  this.changeSquareColor = function (x, y) {
    const id = `${column[x]}${y}`
    document.getElementById(id).classList.add("recommend")
    document.getElementById(id).addEventListener("click", () => this.movePiece(`${id}`))
  }
  this.resetSquareColor = () => {
    const squares = document.querySelectorAll(`.square`)
    squares.forEach(square => {
      square.classList.remove("recommend");
    })
  }
  this.movePiece = function (id) {
    console.log(id)
    const square = document.getElementById(id);
    const img = document.createElement("img");
    img.src = document.querySelector(".chosen img").src;
    const current = document.querySelector(".chosen")
    current.removeChild(current.firstChild)
    current.classList.remove("chosen")
    this.resetSquareColor()
    square.appendChild(img);
    
  };
}

//jesus
const board = new Board();
board.create();

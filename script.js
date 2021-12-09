const column = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const link = window.location.href
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
      this.img = document.createElement("img");
      this.img.setAttribute("src", "");
      this.square.appendChild(this.img);
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
      // square.removeEventListener("click", () => this.movePiece(`${id}`));
      // square.removeEventListener("mouseup", () => {
      //   this.isChosen(this.id);
      //   this.recommendMoves(this.id);
      // })
    })
  }
  this.oldId = function () {

  };
  this.currentId = function () {

  };
  this.movePiece = function (id) {
    console.log(id)
    const square = document.getElementById(id);
    console.log(square.name)
    if (square.classList.contains("recommend")) {
      const img = document.createElement("img");
      img.src = document.querySelector(".chosen img").src;
      const current = document.querySelector(".chosen")
      console.log(current.getAttribute("name"));
      square.name = current.getAttribute("name");
      console.log(square.name)
      current.setAttribute("name", "")
      current.firstChild.src = ''
      current.classList.remove("chosen")
      this.resetSquareColor()
      square.appendChild(img);
    }

  };
}

//jesus
const board = new Board();
board.create();

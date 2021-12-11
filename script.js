const column = ["", "a", "b", "c", "d", "e", "f", "g", "h"];
const link = window.location.href;
function Board() {
  this.layout = document.getElementById("chessboard");
  this.create = function () {
    for (let rowId = 8; rowId >= 0; rowId--) {
      this.row = document.createElement("div");
      this.row.className = "row";
      this.row.setAttribute("id", `${rowId}`);
      this.layout.appendChild(this.row);
      this.addSquareToRow(rowId);
    }
  };
  this.addSquareToRow = function (rowId) {
    this.rowId = document.getElementById(`${rowId}`);
    for (let columnId = 0; columnId <= 8; columnId++) {
      this.square = document.createElement("div");
      this.square.className = "square";
      this.square.setAttribute("id", `${column[columnId]}${rowId}`);
      this.rowId.appendChild(this.square);
      this.img = document.createElement("img");
      this.img.setAttribute("src", "");
      this.square.appendChild(this.img);
      rowId * columnId !== 0 &&
        ((rowId + columnId) % 2 === 0
          ? this.square.classList.add("black")
          : this.square.classList.add("white"));
    }
  };
  this.changeSquareColor = function (x, y) {
    const id = `${column[x]}${y}`;
    // console.log(id);
    const square = document.getElementById(id);
    square.classList.add("recommend");
    // square.addEventListener("click", () => this.movePiece(`${id}`));
  };
  this.resetSquareColor = () => {
    const squares = document.querySelectorAll(`.square`);
    squares.forEach((square) => {
      square.classList.remove("recommend");
    });
  };
  this.oldId = function () {};
  this.currentId = function () {};
  // this.movePiece = function (id) {
  //   console.log(id);
  //   setDataToLocal("isMove", true);
  //   const square = document.getElementById(id);
  //   if (square.classList.contains("recommend")) {
  //     square.firstChild.src = document.querySelector(".chosen img").src;
  //     const current = document.querySelector(".chosen");
  //     square.setAttribute("name", current.getAttribute("name"));
  //     current.setAttribute("name", "");
  //     current.firstChild.src = "";
  //     current.classList.remove("chosen");
  //     this.resetSquareColor();
  //   }
  // };

  this.defaultPosition = function () {
    const position = getDataFromLocal("position");
    position.forEach((chess) => {
      const square = document.getElementById(chess.position);
      square.firstChild.src = chess.url;
      square.setAttribute("name", chess.name);
      square.setAttribute("key", chess.key);
      square.addEventListener("click", () => {
        if (!this.isEmpty(chess.position)) {
          this.isChosen(chess.position);
          this.showMoves(chess.position);
        }
      });
    });
  };
  this.isChosen = function (position) {
    console.log("chosen");
    setDataToLocal("isMove", false);
    this.position = position;
    this.isNotChosen();
    document.getElementById(position).classList.add("chosen");
  };
  this.isNotChosen = function () {
    const squares = document.querySelectorAll(`.square`);
    squares.forEach((square) => square.classList.remove("chosen"));
    squares.forEach((square) => square.classList.remove("recommend"));
  };
  this.isEmpty = function (position) {
    if (document.getElementById(position).firstChild.src === link) return true;
  };
  this.showMoves = function (position) {
    const piece = document.getElementById(position);
    piece.getAttribute("name");
    console.log(1)
  };

}

//jesus
const board = new Board();
board.create();
board.defaultPosition();

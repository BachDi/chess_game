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

  this.changeColorRecommend = function (x, y, chess) {
    const id = `${column[x]}${y}`;
    const square = document.getElementById(id);
    square.classList.add("recommend");
    square.addEventListener("click", () => {
      this.movePiece(id, chess);
    });
  };

  this.changeColorKill = function (x, y, chess, key) {
    const id = `${column[x]}${y}`;
    console.log("can kill", id);
    const square = document.getElementById(id);
    square.classList.add("kill");
    square.addEventListener("click", () => {
      this.killChess(id, chess, key);
    });
  };

  this.resetSquareColor = () => {
    const squares = document.querySelectorAll(`.square`);
    squares.forEach((square) => {
      square.classList.remove("recommend");
      square.classList.remove("kill");
    });
  };

  this.movePiece = function (id, chessMove) {
    console.log("move to", id);
    setDataToLocal("isWhite", chessMove.isWhite);
    const position = getDataFromLocal("position");
    const moveToSquare = document.getElementById(id);
    const chosenSquare = document.querySelector(".chosen");
    const cloneMoveToSquare = moveToSquare.cloneNode(true);
    chessMove.position = id;
    if (moveToSquare.classList.contains("recommend")) {
      position.forEach((chess) => {
        if (chess.key === chosenSquare.getAttribute("key")) {
          chess.position = id;
        }
      });

      moveToSquare.parentNode.replaceChild(cloneMoveToSquare, moveToSquare);
      const cloneChosenSquare = chosenSquare.cloneNode(true);
      chosenSquare.parentNode.replaceChild(cloneChosenSquare, chosenSquare);

      moveToSquare.firstChild.src = document.querySelector(".chosen img").src;
      moveToSquare.setAttribute("name", chosenSquare.getAttribute("name"));
      moveToSquare.setAttribute("key", chosenSquare.getAttribute("key"));
      cloneChosenSquare.setAttribute("name", "");
      cloneChosenSquare.setAttribute("key", "");
      cloneChosenSquare.firstChild.src = "";

      cloneChosenSquare.classList.remove("chosen");
      setDataToLocal("position", position);
      board.renderPosition();
      this.resetSquareColor();
      this.removeEventMove();
      this.removeEventKill();
      chessMove.setPiece();
    }
  };

  this.removeEventMove = function () {
    const recommend = getDataFromLocal("recommend");
    recommend.forEach((id) => {
      const oldEl = document.getElementById(id);
      const newEl = oldEl.cloneNode(true);
      oldEl.parentNode.replaceChild(newEl, oldEl);
    });
  };

  this.removeEventKill = function () {
    const kill = getDataFromLocal("kill");
    kill.forEach((id) => {
      const oldEl = document.getElementById(id);
      const newEl = oldEl.cloneNode(true);
      oldEl.parentNode.replaceChild(newEl, oldEl);
      this.addEvenChosen();
    });
  };

  this.renderPosition = function () {
    const position = getDataFromLocal("position");
    position.forEach((chess) => {
      const square = document.getElementById(chess.position);
      square.firstChild.src = chess.url;
      square.setAttribute("name", chess.name);
      square.setAttribute("key", chess.key);
    });
  };

  this.isOutside = function (x, y) {
    if (x > 8 || x < 1 || y > 8 || y < 1) {
      return true;
    } else {
      return false;
    }
  };

  this.killChess = function (id, chessKill, key) {
    setDataToLocal("isWhite", chessKill.isWhite);
    const position = getDataFromLocal("position");
    position.forEach((chess) => {
      if (chess.key === key) {
        chess.position = "0";
      }
      if (chess.key === chessKill.key) {
        chess.position = id;
      }
    });
    setDataToLocal("position", position);
    chessKill.position = id;
    board.renderPosition();

    const killSquare = document.getElementById(id);
    const chosenSquare = document.querySelector(".chosen");
    const cloneKillSquare = killSquare.cloneNode(true);
    killSquare.parentNode.replaceChild(cloneKillSquare, killSquare);
    const cloneChosenSquare = chosenSquare.cloneNode(true);
    chosenSquare.parentNode.replaceChild(cloneChosenSquare, chosenSquare);

    killSquare.firstChild.src = document.querySelector(".chosen img").src;
    killSquare.setAttribute("name", chosenSquare.getAttribute("name"));
    killSquare.setAttribute("key", chosenSquare.getAttribute("key"));
    cloneChosenSquare.setAttribute("name", "");
    cloneChosenSquare.setAttribute("key", "");
    cloneChosenSquare.firstChild.src = "";

    cloneChosenSquare.classList.remove("chosen");
    this.resetSquareColor();
    this.removeEventKill();
    this.removeEventMove();
    chessKill.setPiece();
  };

  this.addEvenChosen = function () {
    whiteRook1.setPiece();
    whiteRook2.setPiece();
    whiteKnight1.setPiece();
    whiteKnight2.setPiece();
    whiteBishop1.setPiece();
    whiteBishop2.setPiece();
    whitePawn1.setPiece();
    whitePawn2.setPiece();
    whitePawn3.setPiece();
    whitePawn4.setPiece();
    whitePawn5.setPiece();
    whitePawn6.setPiece();
    whitePawn7.setPiece();
    whitePawn8.setPiece();
    whiteQueen.setPiece();
    whiteKing.setPiece();
    blackRook1.setPiece();
    blackRook2.setPiece();
    blackKnight1.setPiece();
    blackKnight2.setPiece();
    blackBishop1.setPiece();
    blackBishop2.setPiece();
    blackPawn1.setPiece();
    blackPawn2.setPiece();
    blackPawn3.setPiece();
    blackPawn4.setPiece();
    blackPawn5.setPiece();
    blackPawn6.setPiece();
    blackPawn7.setPiece();
    blackPawn8.setPiece();
    blackQueen.setPiece();
    blackKing.setPiece();
  };
}

//jesus
const board = new Board();
board.create();
board.renderPosition();
board.setPiece();

setDataToLocal("isWhite", "");
setDataToLocal("recommend", []);
setDataToLocal("kill", []);
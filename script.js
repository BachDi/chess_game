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

  this.changeSquareColor = function (x, y, chess) {
    const id = `${column[x]}${y}`;
    const square = document.getElementById(id);
    square.classList.add("recommend");
    square.addEventListener("click", () => {
      this.movePiece(id, chess);
    });
  };

  this.resetSquareColor = () => {
    const squares = document.querySelectorAll(`.square`);
    squares.forEach((square) => {
      square.classList.remove("recommend");
      square.classList.remove("kill");
    });
  };

  this.movePiece = function (id, chess) {
    console.log("move to", id);
    setDataToLocal("isWhite", chess.isWhite);
    const position = getDataFromLocal("position");
    const moveToSquare = document.getElementById(id);
    const chosenSquare = document.querySelector(".chosen");
    const cloneMoveToSquare = moveToSquare.cloneNode(true);
    if (moveToSquare.classList.contains("recommend")) {
      chess.position = id;
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
      board.defaultPosition();
      this.resetSquareColor();
      this.removeEvent();
      chess.setPiece();
    }
  };

  this.removeEvent = function () {
    const recommend = getDataFromLocal("recommend");
    recommend.forEach((id) => {
      const oldEl = document.getElementById(id);
      const newEl = oldEl.cloneNode(true);
      oldEl.parentNode.replaceChild(newEl, oldEl);
    });
  };

  this.defaultPosition = function () {
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

  this.killChess = function (chessKill, chessIsKilled) {
    setDataToLocal("isWhite", chessKill.isWhite);
    const id = chessIsKilled.position;
    const position = getDataFromLocal("position");
    position.forEach((chess) => {
      if (chess.key === chessIsKilled.key) {
        chess.position = "0";
      }
      if (chess.key === chessKill.key) {
        chess.position = id;
      }
    });
    setDataToLocal("position", position);
    chessIsKilled.position = "0";
    chessKill.position = id;
    board.defaultPosition();

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
    this.removeEvent();
    chessKill.setPiece();
  };
}

//jesus
const board = new Board();
board.create();
board.defaultPosition();
setDataToLocal("isWhite", "");
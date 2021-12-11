function Queen(isWhite, id, key) {
  const queenUrl = isWhite ? "asset/queen_white.png" : "asset/queen_black.png";
  this.isWhite = isWhite;
  ChessPiece.call(this, "queen", id, queenUrl, key);
  this.recommendMoves = function (id) {
    let x = id.charAt(0);
    let y = parseInt(id.charAt(1));
    x = column.findIndex((value) => value === x);
    // console.log(x, y);
    board.resetSquareColor();
    for (let top = y + 1; top <= 8; top++) {
      if (!this.isEmpty(`${column[x]}${top}`)) {
        break;
      }
      board.changeSquareColor(x, top, this);
      const id = `${column[x]}${top}`;
      // document.getElementById(id).addEventListener("click", () => {
      //   board.movePiece(id);
      //   this.setPosition(id);
      // });
    }
    for (let bottom = y - 1; bottom > 0; bottom--) {
      if (!this.isEmpty(`${column[x]}${bottom}`)) {
        break;
      }
      board.changeSquareColor(x, bottom, this);
      const id = `${column[x]}${bottom}`;
      // document.getElementById(id).addEventListener("click", () => {
      //   board.movePiece(id);
      //   this.setPosition(id);
      // });
    }
    for (let right = x + 1; right <= 8; right++) {
      if (!this.isEmpty(`${column[right]}${y}`)) {
        break;
      }
      board.changeSquareColor(right, y, this);
      const id = `${column[right]}${y}`;
      // document.getElementById(id).addEventListener("click", () => {
      //   board.movePiece(id);
      //   this.setPosition(id);
      // });
    }
    for (let left = x - 1; left > 0; left--) {
      if (!this.isEmpty(`${column[left]}${y}`)) {
        break;
      }
      board.changeSquareColor(left, y, this);
      const id = `${column[left]}${y}`;
      // document.getElementById(id).addEventListener("click", () => {
      //   board.movePiece(id);
      //   this.setPosition(id);
      // });
    }
    //top right
    let tempX = x;
    let tempY = y;
    while (this.isEmpty(`${column[tempX + 1]}${tempY + 1}`)) {
      tempX += 1;
      tempY += 1;
      board.changeSquareColor(tempX, tempY, this);
    }
    //top left
    tempX = x;
    tempY = y
    while (this.isEmpty(`${column[tempX + 1]}${tempY - 1}`)) {
      tempX += 1;
      tempY -= 1;
      board.changeSquareColor(tempX, tempY, this);
    }
    //bottom right
    tempX = x;
    tempY = y
    while (this.isEmpty(`${column[tempX - 1]}${tempY + 1}`)) {
      tempX -= 1;
      tempY += 1;
      board.changeSquareColor(tempX, tempY, this);
    }
    //bottom left
    tempX = x;
    tempY = y
    while (this.isEmpty(`${column[tempX - 1]}${tempY - 1}`)) {
      tempX -= 1;
      tempY -= 1;
      board.changeSquareColor(tempX, tempY, this);
    }
  };
}

function King(isWhite, id, key){
  const kingUrl = isWhite ? "asset/king_white.png" : "asset/king_black.png"
  this.isWhite = isWhite;
  ChessPiece.call(this, "king", id, kingUrl, key);
  this.recommendMoves = function (id) {
    let x = id.charAt(0);
    let y = parseInt(id.charAt(1));
    x = column.findIndex((value) => value === x);
    // console.log(x, y);
    board.resetSquareColor();
    if (this.isEmpty(`${column[x + 1]}${y}`)) {
      board.changeSquareColor(x + 1, y, this);
    }
    if (this.isEmpty(`${column[x + 1]}${y + 1}`)) {
      board.changeSquareColor(x + 1, y + 1, this);
    }
    if (this.isEmpty(`${column[x]}${y + 1}`)) {
      board.changeSquareColor(x, y + 1, this);
    }
    if (this.isEmpty(`${column[x - 1]}${y}`)) {
      board.changeSquareColor(x - 1, y, this);
    }
    if (this.isEmpty(`${column[x - 1]}${y - 1}`)) {
      board.changeSquareColor(x - 1, y - 1, this);
    }
    if (this.isEmpty(`${column[x]}${y - 1}`)) {
      board.changeSquareColor(x, y - 1, this);
    }
    if (this.isEmpty(`${column[x + 1]}${y - 1}`)) {
      board.changeSquareColor(x + 1, y - 1, this);
    }
    if (this.isEmpty(`${column[x - 1]}${y + 1}`)) {
      board.changeSquareColor(x - 1, y + 1, this);
    }
  }
}
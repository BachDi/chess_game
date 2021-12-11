function Knight(isWhite, id, key){
  const knightUrl = isWhite ? "asset/knight_white.png" : "asset/knight_black.png"
  this.isWhite = isWhite;
  ChessPiece.call(this, "knight", id, knightUrl, key);
  this.recommendMoves = function (id) {
    let x = id.charAt(0);
    let y = parseInt(id.charAt(1));
    x = column.findIndex((value) => value === x);
    // console.log(x, y);
    board.resetSquareColor();
    //top right
    if (this.isEmpty(`${column[x + 1]}${y + 2}`)) {
      board.changeSquareColor(x + 1, y + 2, this);
    }
    if (this.isEmpty(`${column[x + 2]}${y + 1}`)) {
      board.changeSquareColor(x + 2, y + 1, this);
    }
    //top left
    if (this.isEmpty(`${column[x - 1]}${y + 2}`)) {
      board.changeSquareColor(x - 1, y + 2, this);
    }
    if (this.isEmpty(`${column[x - 2]}${y + 1}`)) {
      board.changeSquareColor(x - 2, y + 1, this);
    }
    //bottom right
    if (this.isEmpty(`${column[x + 1]}${y - 2}`)) {
      board.changeSquareColor(x + 1, y - 2, this);
    }
    if (this.isEmpty(`${column[x + 2]}${y - 1}`)) {
      board.changeSquareColor(x + 2, y - 1, this);
    }
    // bottom left
    if (this.isEmpty(`${column[x - 1]}${y - 2}`)) {
      board.changeSquareColor(x - 1, y - 2, this);
    }
    if (this.isEmpty(`${column[x - 2]}${y - 1}`)) {
      board.changeSquareColor(x - 2, y - 1, this);
    }
  }
}
function Rook(isWhite, id, key) {
  const rookUrl = isWhite ? "asset/rook_white.png" : "asset/rook_black.png";
  this.isWhite = isWhite;
  ChessPiece.call(this, "rook", id, rookUrl, key);
  this.recommendMovesForRook = function (id) {
    let x = this.id.charAt(0);
    let y = parseInt(this.id.charAt(1));
    x = column.findIndex((value) => value === x);
    // console.log(x, y);
    board.resetSquareColor();
    for (let top = y + 1; top <= 8; top++) {
      if (!this.isEmpty(`${column[x]}${top}`)) {
        break;
      }
      board.changeSquareColor(x, top);
    }
    for (let bottom = y - 1; bottom > 0; bottom--) {
      if (!this.isEmpty(`${column[x]}${bottom}`)) {
        break;
      }
      board.changeSquareColor(x, bottom);
    }
    for (let right = x + 1; right <= 8; right++) {
      if (!this.isEmpty(`${column[right]}${y}`)) {
        break;
      }
      board.changeSquareColor(right, y);
    }
    for (let left = x - 1; left > 0; left--) {
      if (!this.isEmpty(`${column[left]}${y}`)) {
        break;
      }
      board.changeSquareColor(left, y);
    }
  };
}

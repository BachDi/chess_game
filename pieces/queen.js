function Queen(isWhite, id, key) {
  const queenUrl = isWhite ? "asset/queen_white.png" : "asset/queen_black.png";
  this.isWhite = isWhite;
  ChessPiece.call(this, "queen", id, queenUrl, key);
  this.recommendMovesForQueen = function (id) {
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
      const id = `${column[x]}${top}`;
      document
        .getElementById(id)
        .addEventListener("click", () => board.movePiece(id));
    }
    for (let bottom = y - 1; bottom > 0; bottom--) {
      if (!this.isEmpty(`${column[x]}${bottom}`)) {
        break;
      }
      board.changeSquareColor(x, bottom);
      const id = `${column[x]}${bottom}`;
      document
        .getElementById(id)
        .addEventListener("click", () => board.movePiece(id));
    }
    for (let right = x + 1; right <= 8; right++) {
      if (!this.isEmpty(`${column[right]}${y}`)) {
        break;
      }
      board.changeSquareColor(right, y);
      const id = `${column[right]}${y}`;
      document
        .getElementById(id)
        .addEventListener("click", () => board.movePiece(id));
    }
    for (let left = x - 1; left > 0; left--) {
      if (!this.isEmpty(`${column[left]}${y}`)) {
        break;
      }
      board.changeSquareColor(left, y);
      const id = `${column[left]}${y}`;
      document
        .getElementById(id)
        .addEventListener("click", () => board.movePiece(id));
    }
  };
}

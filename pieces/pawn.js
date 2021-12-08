function Pawn(isWhite, id) {
  const pawnUrl = isWhite ? "asset/pawn_white.png" : "asset/pawn_black.png"
  this.isWhite = isWhite;
  ChessPiece.call(this, "pawn", id, pawnUrl);
  this.recommendMoves = function (id) {
    let x = this.id.charAt(0);
    let y = parseInt(this.id.charAt(1));
    const square = document.getElementById(id)
    x = column.findIndex(value => value === x)
    // console.log(x, y);
    board.resetSquareColor(id)
    if (this.isWhite === true) {
      if (y === 2) {
        for (i = y + 1; i <= y + 2; i++) {
          if (square.classList.contains("chosen")) {
            board.changeSquareColor(x, i);
          }
        }
      } else {
      }
    } else {
      if (y === 7) {
        for (i = y - 1; i >= y - 2; i--) {
          board.changeSquareColor(x, i);
        }
      } else {
      }
    }
  }
}
//fk chess :D
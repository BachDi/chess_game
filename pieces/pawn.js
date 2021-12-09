function Pawn(isWhite, id) {
  const pawnUrl = isWhite ? "asset/pawn_white.png" : "asset/pawn_black.png";
  this.isWhite = isWhite;
  ChessPiece.call(this, "pawn", id, pawnUrl);
  this.recommendMovesForPawns = function (id) {
    let x = this.id.charAt(0);
    let y = parseInt(this.id.charAt(1));
    x = column.findIndex((value) => value === x);
    // console.log(x, y);
    board.resetSquareColor();
    if (this.isWhite === true) {
      if (y === 2) {
        for (i = y + 1; i <= y + 2; i++) {
          board.changeSquareColor(x, i);
        }
      } else {
        board.changeSquareColor(x, y + 1); //1
      }
    } else {
      if (y === 7) {
        for (i = y - 1; i >= y - 2; i--) {
          board.changeSquareColor(x, i);
        }
      } else {
        board.changeSquareColor(x, y - 1); //2
      }
    }
  };
  this.oldId = function () {};
  this.currentId = function () {};
}
//fk chess :D

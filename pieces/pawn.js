function Pawn(isWhite, id, key) {
  const pawnUrl = isWhite ? "asset/pawn_white.png" : "asset/pawn_black.png";
  this.isWhite = isWhite;
  ChessPiece.call(this, "pawn", id, pawnUrl, key);
  this.recommendMovesForPawn = function (id) {
    let x = this.id.charAt(0);
    let y = parseInt(this.id.charAt(1));
    x = column.findIndex((value) => value === x);
    // console.log(x, y);
    board.resetSquareColor();
    if (this.isWhite === true) {
      if (y === 2) {
        for (i = y + 1; i <= y + 2; i++) {
          board.changeSquareColor(x, i);
          const id = `${column[x]}${i}`;
          document
            .getElementById(id)
            .addEventListener("click", () => board.movePiece(id));
        }
      } else {
        board.changeSquareColor(x, y + 1); //1
        const id = `${column[x]}${y+1}`;
          document
            .getElementById(id)
            .addEventListener("click", () => board.movePiece(id));
      }
    } else {
      if (y === 7) {
        for (i = y - 1; i >= y - 2; i--) {
          board.changeSquareColor(x, i);
          const id = `${column[x]}${i}`;
          document
            .getElementById(id)
            .addEventListener("click", () => board.movePiece(id));
        }
      } else {
        board.changeSquareColor(x, y - 1); //2
        const id = `${column[x]}${y-1}`;
          document
            .getElementById(id)
            .addEventListener("click", () => board.movePiece(id));
      }
    }
  };
  this.oldId = function () {};
  this.currentId = function () {};
}
//fk chess :D

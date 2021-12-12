function Pawn(isWhite, id, key) {
  const pawnUrl = isWhite ? "asset/pawn_white.png" : "asset/pawn_black.png";
  this.isWhite = isWhite;
  ChessPiece.call(this, "pawn", id, pawnUrl, key);
  this.recommendMoves = function (id) {
    let x = id.charAt(0);
    let y = parseInt(id.charAt(1));
    x = column.findIndex((value) => value === x);
    // console.log(x, y);
    let recommend = [];
    board.resetSquareColor();
    if (this.isWhite === true) {
      if (y === 2) {
        for (i = y + 1; i <= y + 2; i++) {
          if (!this.isEmpty(`${column[x]}${i}`)) {
            break;
          }
          board.changeSquareColor(x, i, this);
          const id = `${column[x]}${i}`;
          recommend.push(id);
        }
      } else {
        if (this.isEmpty(`${column[x]}${y + 1}`)) {
          board.changeSquareColor(x, y + 1, this);
          const id = `${column[x]}${y + 1}`;
          recommend.push(id);
        }
      }
    } else {
      if (y === 7) {
        for (i = y - 1; i >= y - 2; i--) {
          if (!this.isEmpty(`${column[x]}${i}`)) {
            break;
          }
          board.changeSquareColor(x, i, this);
          const id = `${column[x]}${i}`;
          recommend.push(id);
        }
      } else {
        if (this.isEmpty(`${column[x]}${y - 1}`)) {
          board.changeSquareColor(x, y - 1, this);
          const id = `${column[x]}${y - 1}`;
          recommend.push(id);
        }
      }
    }
    setDataToLocal("recommend", recommend);
  };
  this.oldId = function () {};
  this.currentId = function () {};
}
//fk chess :D

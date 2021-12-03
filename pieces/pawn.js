function Pawn(isWhite, id){
  const pawnUrl = isWhite ? "asset/pawn_white.png" : "asset/pawn_black.png"
  this.isWhite = isWhite;
  ChessPiece.call(this, "pawn", id, pawnUrl);
  this.recommendMoves = function (id) {
    let x = this.id.charAt(0);
    let y = parseInt(this.id.charAt(1));
    column.find((value, index) => {
      if (value == x) {
        x = index;
      }
    });
    console.log(x, y);
    if (this.isWhite == true) {
      if (y == 2) {
        for (i = y + 1; i <= y + 2; i++) {
          changeColor(x, i);
        }
      } else {
      }
    } else {
      if (y == 7) {
        for (i = y - 1; i >= y - 2; i--) {
          changeColor(x, i);
        }
      } else {
      }
    }
  }
}
//fk chess :D
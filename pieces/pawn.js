function Pawn(isWhite, id){
  const pawnUrl = isWhite ? "asset/pawn_white.png" : "asset/pawn_black.png"
  ChessPiece.call(this, "pawn", id, kingUrl);
}
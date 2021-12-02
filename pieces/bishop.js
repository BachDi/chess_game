function Bishop(isWhite, id){
  const bishopUrl = isWhite ? "asset/bishop_white.png" : "asset/bishop_black.png"
  this.isWhite = isWhite;
  ChessPiece.call(this, "bishop", id, bishopUrl);
}
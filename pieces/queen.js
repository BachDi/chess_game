function Queen(isWhite, id){
  const queenUrl = isWhite ? "asset/queen_white.png" : "asset/queen_black.png"
  this.isWhite = isWhite;
  ChessPiece.call(this, "queen", id, queenUrl);
}
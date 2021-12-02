function Queen(isWhite, id){
  const queenUrl = isWhite ? "asset/queen_white.png" : "asset/queen_black.png"
  ChessPiece.call(this, "queen", id, queenUrl);
}
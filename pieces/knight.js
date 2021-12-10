function Knight(isWhite, id, key){
  const knightUrl = isWhite ? "asset/knight_white.png" : "asset/knight_black.png"
  this.isWhite = isWhite;
  ChessPiece.call(this, "knight", id, knightUrl, key);
}
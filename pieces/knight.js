function Knight(isWhite, id){
  const knightUrl = isWhite ? "asset/knight_white.png" : "asset/knight_black.png"
  ChessPiece.call(this, "knight", id, knightUrl);
}
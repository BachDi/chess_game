function King(isWhite, id, key){
  const kingUrl = isWhite ? "asset/king_white.png" : "asset/king_black.png"
  this.isWhite = isWhite;
  ChessPiece.call(this, "king", id, kingUrl, key);
}
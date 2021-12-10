function Bishop(isWhite, id, key) {
  const bishopUrl = isWhite
    ? "asset/bishop_white.png"
    : "asset/bishop_black.png";
  this.isWhite = isWhite;
  ChessPiece.call(this, "bishop", id, bishopUrl, key);
}

function King(isWhite, id){
  const kingUrl = isWhite ? "asset/king_white.png" : "asset/king_black.png"
  ChessPiece.call(this, "king", id, kingUrl);
}
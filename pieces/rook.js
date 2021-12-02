function Rook(isWhite, id){
  const rookUrl = isWhite ? "asset/rook_white.png" : "asset/rook_black.png";
  ChessPiece.call(this, "rook", id, rookUrl);
}
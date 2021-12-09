function Empty(isWhite, id){
  const rookUrl = "";
  this.isWhite = isWhite;
  ChessPiece.call(this, "", id, rookUrl);
}
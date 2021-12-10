function Empty(isWhite, id, key){
  const rookUrl = "";
  this.isWhite = isWhite;
  ChessPiece.call(this, "", id, rookUrl, key);
}
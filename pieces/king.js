function King(isWhite, id, key){
  const kingUrl = isWhite ? "asset/king_white.png" : "asset/king_black.png"
  this.isWhite = isWhite;
  ChessPiece.call(this, "king", id, kingUrl, key);
  this.recommendMoves = function (id) {
    let x = id.charAt(0);
    let y = parseInt(id.charAt(1));
    let recommend = [];
    x = column.findIndex((value) => value === x);
    // console.log(x, y);
    board.resetSquareColor();
    let tempX = x + 1;
    let tempY = y;
    if (!board.isOutside(tempX, tempY) && this.isEmpty(`${column[tempX]}${tempY}`)) {
      board.changeSquareColor(tempX, tempY, this);
      const id = `${column[tempX]}${tempY}`;
      recommend.push(id);
    }
    tempX = x + 1;
    tempY = y + 1;
    if (!board.isOutside(tempX, tempY) && this.isEmpty(`${column[tempX]}${tempY}`)) {
      board.changeSquareColor(tempX, tempY, this);
      const id = `${column[tempX]}${tempY}`;
      recommend.push(id);
    }
    tempX = x;
    tempY = y + 1;
    if (!board.isOutside(tempX, tempY) && this.isEmpty(`${column[tempX]}${tempY}`)) {
      board.changeSquareColor(tempX, tempY, this);
      const id = `${column[tempX]}${tempY}`;
      recommend.push(id);
    }
    tempX = x - 1;
    tempY = y;
    if (!board.isOutside(tempX, tempY) && this.isEmpty(`${column[tempX]}${tempY}`)) {
      board.changeSquareColor(tempX, tempY, this);
      const id = `${column[tempX]}${tempY}`;
      recommend.push(id);
    }
    tempX = x - 1;
    tempY = y - 1;
    if (!board.isOutside(tempX, tempY) && this.isEmpty(`${column[tempX]}${tempY}`)) {
      board.changeSquareColor(tempX, tempY, this);
      const id = `${column[tempX]}${tempY}`;
      recommend.push(id);
    }
    tempX = x;
    tempY = y - 1;
    if (!board.isOutside(tempX, tempY) && this.isEmpty(`${column[tempX]}${tempY}`)) {
      board.changeSquareColor(tempX, tempY, this);
      const id = `${column[tempX]}${tempY}`;
      recommend.push(id);
    }
    tempX = x + 1;
    tempY = y - 1;
    if (!board.isOutside(tempX, tempY) && this.isEmpty(`${column[tempX]}${tempY}`)) {
      board.changeSquareColor(tempX, tempY, this);
      const id = `${column[tempX]}${tempY}`;
      recommend.push(id);
    }
    tempX = x - 1;
    tempY = y + 1;
    if (!board.isOutside(tempX, tempY) && this.isEmpty(`${column[tempX]}${tempY}`)) {
      board.changeSquareColor(tempX, tempY, this);
      const id = `${column[tempX]}${tempY}`;
      recommend.push(id);
    }
    setDataToLocal("recommend", recommend);
  }
}
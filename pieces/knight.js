function Knight(isWhite, id, key){
  const knightUrl = isWhite ? "asset/knight_white.png" : "asset/knight_black.png"
  this.isWhite = isWhite;
  ChessPiece.call(this, "knight", id, knightUrl, key);
  this.recommendMoves = function (id) {
    let x = id.charAt(0);
    let y = parseInt(id.charAt(1));
    let recommend = [];
    x = column.findIndex((value) => value === x);
    // console.log(x, y);
    board.resetSquareColor();
    //top right
    if (this.isEmpty(`${column[x + 1]}${y + 2}`)) {
      board.changeSquareColor(x + 1, y + 2, this);
      const id = `${column[x + 1]}${y + 2}`;
      recommend.push(id);
    }
    if (this.isEmpty(`${column[x + 2]}${y + 1}`)) {
      board.changeSquareColor(x + 2, y + 1, this);
      const id = `${column[x + 2]}${y + 1}`;
      recommend.push(id);
    }
    //top left
    if (this.isEmpty(`${column[x - 1]}${y + 2}`)) {
      board.changeSquareColor(x - 1, y + 2, this);
      const id = `${column[x - 1]}${y + 2}`;
      recommend.push(id);
    }
    if (this.isEmpty(`${column[x - 2]}${y + 1}`)) {
      board.changeSquareColor(x - 2, y + 1, this);
      const id = `${column[x - 2]}${y + 1}`;
      recommend.push(id);
    }
    //bottom right
    if (this.isEmpty(`${column[x + 1]}${y - 2}`)) {
      board.changeSquareColor(x + 1, y - 2, this);
      const id = `${column[x + 1]}${y - 2}`;
      recommend.push(id);
    }
    if (this.isEmpty(`${column[x + 2]}${y - 1}`)) {
      board.changeSquareColor(x + 2, y - 1, this);
      const id = `${column[x + 2]}${y - 1}`;
      recommend.push(id);
    }
    // bottom left
    if (this.isEmpty(`${column[x - 1]}${y - 2}`)) {
      board.changeSquareColor(x - 1, y - 2, this);
      const id = `${column[x - 1]}${y - 2}`;
      recommend.push(id);
    }
    if (this.isEmpty(`${column[x - 2]}${y - 1}`)) {
      board.changeSquareColor(x - 2, y - 1, this);
      const id = `${column[x - 2]}${y - 1}`;
      recommend.push(id);
    }
    setDataToLocal("recommend", recommend);
  }
}
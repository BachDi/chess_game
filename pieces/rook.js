function Rook(isWhite, id, key) {
  const rookUrl = isWhite ? "asset/rook_white.png" : "asset/rook_black.png";
  this.isWhite = isWhite;
  ChessPiece.call(this, "rook", id, rookUrl, key);
  this.recommendMoves = function (id) {
    let x = id.charAt(0);
    let y = parseInt(id.charAt(1));
    x = column.findIndex((value) => value === x);
    let recommend = [];
    // console.log(x, y);
    board.resetSquareColor();
    for (let top = y + 1; top <= 8; top++) {
      if (!this.isEmpty(`${column[x]}${top}`)) {
        break;
      }
      board.changeColorRecommend(x, top, this);
      const id = `${column[x]}${top}`;
      recommend.push(id);
    }
    for (let bottom = y - 1; bottom > 0; bottom--) {
      if (!this.isEmpty(`${column[x]}${bottom}`)) {
        break;
      }
      board.changeColorRecommend(x, bottom, this);
      const id = `${column[x]}${bottom}`;
      recommend.push(id);
    }
    for (let right = x + 1; right <= 8; right++) {
      if (!this.isEmpty(`${column[right]}${y}`)) {
        break;
      }
      board.changeColorRecommend(right, y, this);
      const id = `${column[right]}${y}`;
      recommend.push(id);
    }
    for (let left = x - 1; left > 0; left--) {
      if (!this.isEmpty(`${column[left]}${y}`)) {
        break;
      }
      board.changeColorRecommend(left, y, this);
      const id = `${column[left]}${y}`;
      recommend.push(id);
    }
    setDataToLocal("recommend", recommend);
  };
}

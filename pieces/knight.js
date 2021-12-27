function Knight(isWhite, id, key){
  const knightUrl = isWhite ? "asset/knight_white.png" : "asset/knight_black.png"
  this.isWhite = isWhite;
  ChessPiece.call(this, "knight", id, knightUrl, key);
  this.recommendMoves = function (id) {
    let x = id.charAt(0);
    let y = parseInt(id.charAt(1));
    let recommend = [];
    let kill = [];
    x = column.findIndex((value) => value === x);
    // console.log(x, y);
    board.resetSquareColor();

    //top right
    let tempX = x + 1;
    let tempY = y + 2;
    if (
      !board.isOutside(tempX, tempY) &&
      this.isEmpty(`${column[tempX]}${tempY}`)
    ) {
      board.changeColorRecommend(tempX, tempY, this);
      const id = `${column[tempX]}${tempY}`;
      recommend.push(id);
    } else if (
      !board.isOutside(tempX, tempY) &&
      !this.isEmpty(`${column[tempX]}${tempY}`)
    ) {
      const id = `${column[tempX]}${tempY}`;
      const squareKey = document.getElementById(id).getAttribute("key");
      const squareColor = squareKey.slice(0, 5) === "white";
      if (this.isWhite !== squareColor) {
        board.changeColorKill(tempX, tempY, this, squareKey);
        kill.push(id);
      }
    }

    tempX = x + 2;
    tempY = y + 1;
    if (
      !board.isOutside(tempX, tempY) &&
      this.isEmpty(`${column[tempX]}${tempY}`)
    ) {
      board.changeColorRecommend(tempX, tempY, this);
      const id = `${column[tempX]}${tempY}`;
      recommend.push(id);
    } else if (
      !board.isOutside(tempX, tempY) &&
      !this.isEmpty(`${column[tempX]}${tempY}`)
    ) {
      const id = `${column[tempX]}${tempY}`;
      const squareKey = document.getElementById(id).getAttribute("key");
      const squareColor = squareKey.slice(0, 5) === "white";
      if (this.isWhite !== squareColor) {
        board.changeColorKill(tempX, tempY, this, squareKey);
        kill.push(id);
      }
    }

    //top left
    tempX = x - 1;
    tempY = y + 2;
    if (
      !board.isOutside(tempX, tempY) &&
      this.isEmpty(`${column[tempX]}${tempY}`)
    ) {
      board.changeColorRecommend(tempX, tempY, this);
      const id = `${column[tempX]}${tempY}`;
      recommend.push(id);
    } else if (
      !board.isOutside(tempX, tempY) &&
      !this.isEmpty(`${column[tempX]}${tempY}`)
    ) {
      const id = `${column[tempX]}${tempY}`;
      const squareKey = document.getElementById(id).getAttribute("key");
      const squareColor = squareKey.slice(0, 5) === "white";
      if (this.isWhite !== squareColor) {
        board.changeColorKill(tempX, tempY, this, squareKey);
        kill.push(id);
      }
    }

    tempX = x - 2;
    tempY = y + 1;
    if (
      !board.isOutside(tempX, tempY) &&
      this.isEmpty(`${column[tempX]}${tempY}`)
    ) {
      board.changeColorRecommend(tempX, tempY, this);
      const id = `${column[tempX]}${tempY}`;
      recommend.push(id);
    } else if (
      !board.isOutside(tempX, tempY) &&
      !this.isEmpty(`${column[tempX]}${tempY}`)
    ) {
      const id = `${column[tempX]}${tempY}`;
      const squareKey = document.getElementById(id).getAttribute("key");
      const squareColor = squareKey.slice(0, 5) === "white";
      if (this.isWhite !== squareColor) {
        board.changeColorKill(tempX, tempY, this, squareKey);
        kill.push(id);
      }
    }

    //bottom right
    tempX = x + 1;
    tempY = y - 2;
    if (
      !board.isOutside(tempX, tempY) &&
      this.isEmpty(`${column[tempX]}${tempY}`)
    ) {
      board.changeColorRecommend(tempX, tempY, this);
      const id = `${column[tempX]}${tempY}`;
      recommend.push(id);
    } else if (
      !board.isOutside(tempX, tempY) &&
      !this.isEmpty(`${column[tempX]}${tempY}`)
    ) {
      const id = `${column[tempX]}${tempY}`;
      const squareKey = document.getElementById(id).getAttribute("key");
      const squareColor = squareKey.slice(0, 5) === "white";
      if (this.isWhite !== squareColor) {
        board.changeColorKill(tempX, tempY, this, squareKey);
        kill.push(id);
      }
    }

    tempX = x + 2;
    tempY = y - 1;
    if (
      !board.isOutside(tempX, tempY) &&
      this.isEmpty(`${column[tempX]}${tempY}`)
    ) {
      board.changeColorRecommend(tempX, tempY, this);
      const id = `${column[tempX]}${tempY}`;
      recommend.push(id);
    } else if (
      !board.isOutside(tempX, tempY) &&
      !this.isEmpty(`${column[tempX]}${tempY}`)
    ) {
      const id = `${column[tempX]}${tempY}`;
      const squareKey = document.getElementById(id).getAttribute("key");
      const squareColor = squareKey.slice(0, 5) === "white";
      if (this.isWhite !== squareColor) {
        board.changeColorKill(tempX, tempY, this, squareKey);
        kill.push(id);
      }
    }

    // bottom left
    tempX = x - 1;
    tempY = y - 2;
    if (
      !board.isOutside(tempX, tempY) &&
      this.isEmpty(`${column[tempX]}${tempY}`)
    ) {
      board.changeColorRecommend(tempX, tempY, this);
      const id = `${column[tempX]}${tempY}`;
      recommend.push(id);
    } else if (
      !board.isOutside(tempX, tempY) &&
      !this.isEmpty(`${column[tempX]}${tempY}`)
    ) {
      const id = `${column[tempX]}${tempY}`;
      const squareKey = document.getElementById(id).getAttribute("key");
      const squareColor = squareKey.slice(0, 5) === "white";
      if (this.isWhite !== squareColor) {
        board.changeColorKill(tempX, tempY, this, squareKey);
        kill.push(id);
      }
    }

    tempX = x - 2;
    tempY = y - 1;
    if (
      !board.isOutside(tempX, tempY) &&
      this.isEmpty(`${column[tempX]}${tempY}`)
    ) {
      board.changeColorRecommend(tempX, tempY, this);
      const id = `${column[tempX]}${tempY}`;
      recommend.push(id);
    } else if (
      !board.isOutside(tempX, tempY) &&
      !this.isEmpty(`${column[tempX]}${tempY}`)
    ) {
      const id = `${column[tempX]}${tempY}`;
      const squareKey = document.getElementById(id).getAttribute("key");
      const squareColor = squareKey.slice(0, 5) === "white";
      if (this.isWhite !== squareColor) {
        board.changeColorKill(tempX, tempY, this, squareKey);
        kill.push(id);
      }
    }

    setDataToLocal("recommend", recommend);
    setDataToLocal("kill", kill);
  }
}
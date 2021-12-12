function Pawn(isWhite, id, key) {
  const pawnUrl = isWhite ? "asset/pawn_white.png" : "asset/pawn_black.png";
  this.isWhite = isWhite;
  ChessPiece.call(this, "pawn", id, pawnUrl, key);
  this.recommendMoves = function (id) {
    let x = id.charAt(0);
    let y = parseInt(id.charAt(1));
    x = column.findIndex((value) => value === x);
    // console.log(x, y);
    let recommend = [];
    let kill = [];
    board.resetSquareColor();
    if (this.isWhite === true) {
      if (y === 2) {
        for (i = y + 1; i <= y + 2; i++) {
          if (!this.isEmpty(`${column[x]}${i}`)) {
<<<<<<< Updated upstream
            const id = `${column[x]}${i}`;
            const squareKey = document.getElementById(id).getAttribute("key");
            const squareColor = squareKey.slice(0, 5) === "white";
            if (this.isWhite !== squareColor) {
              board.changeColorKill(x, i, this, squareKey);
              kill.push(id);
            }
=======
>>>>>>> Stashed changes
            break;
          }
          board.changeColorRecommend(x, i, this);
          const id = `${column[x]}${i}`;
          recommend.push(id);
        }
      } else {
        if (this.isEmpty(`${column[x]}${y + 1}`)) {
          board.changeColorRecommend(x, y + 1, this);
          const id = `${column[x]}${y + 1}`;
          recommend.push(id);
<<<<<<< Updated upstream
        } else {
          const id = `${column[x]}${y + 1}`;
          const squareKey = document.getElementById(id).getAttribute("key");
          const squareColor = squareKey.slice(0, 5) === "white";
          if (this.isWhite !== squareColor) {
            board.changeColorKill(x, y + 1, this, squareKey);
            kill.push(id)
          }
=======
        }
      }
      if (!board.isOutside(x + 1, y + 1) && !this.isEmpty(`${column[x + 1]}${y + 1}`)) {
        const id = `${column[x + 1]}${y + 1}`;
        const squareKey = document.getElementById(id).getAttribute("key");
        const squareColor = squareKey.slice(0, 5) === "white";
        if (this.isWhite !== squareColor) {
          board.changeColorKill(x + 1, y + 1, this, squareKey);
          kill.push(id);
        }
      }
      if (!board.isOutside(x - 1, y + 1) && !this.isEmpty(`${column[x - 1]}${y + 1}`)) {
        const id = `${column[x - 1]}${y + 1}`;
        const squareKey = document.getElementById(id).getAttribute("key");
        const squareColor = squareKey.slice(0, 5) === "white";
        if (this.isWhite !== squareColor) {
          board.changeColorKill(x - 1, y + 1, this, squareKey);
          kill.push(id);
>>>>>>> Stashed changes
        }
      }
    } else {
      if (y === 7) {
        for (i = y - 1; i >= y - 2; i--) {
          if (!this.isEmpty(`${column[x]}${i}`)) {
<<<<<<< Updated upstream
            const id = `${column[x]}${i}`;
            const squareKey = document.getElementById(id).getAttribute("key");
            const squareColor = squareKey.slice(0, 5) === "white";
            if (this.isWhite !== squareColor) {
              board.changeColorKill(x, i, this, squareKey);
              kill.push(id);
            }
=======
>>>>>>> Stashed changes
            break;
          }
          board.changeColorRecommend(x, i, this);
          const id = `${column[x]}${i}`;
          recommend.push(id);
        }
      } else {
        if (this.isEmpty(`${column[x]}${y - 1}`)) {
          board.changeColorRecommend(x, y - 1, this);
          const id = `${column[x]}${y - 1}`;
          recommend.push(id);
<<<<<<< Updated upstream
        } else {
          const id = `${column[x]}${y - 1}`;
          const squareKey = document.getElementById(id).getAttribute("key");
          const squareColor = squareKey.slice(0, 5) === "white";
          if (this.isWhite !== squareColor) {
            board.changeColorKill(x, y - 1, this, squareKey);
            kill.push(id)
          }
=======
        }
      }
      if (!board.isOutside(x + 1, y - 1) && !this.isEmpty(`${column[x + 1]}${y - 1}`)) {
        const id = `${column[x + 1]}${y - 1}`;
        const squareKey = document.getElementById(id).getAttribute("key");
        const squareColor = squareKey.slice(0, 5) === "white";
        if (this.isWhite !== squareColor) {
          board.changeColorKill(x + 1, y - 1, this, squareKey);
          kill.push(id);
        }
      }
      if (!board.isOutside(x - 1, y - 1) && !this.isEmpty(`${column[x - 1]}${y - 1}`)) {
        const id = `${column[x - 1]}${y - 1}`;
        const squareKey = document.getElementById(id).getAttribute("key");
        const squareColor = squareKey.slice(0, 5) === "white";
        if (this.isWhite !== squareColor) {
          board.changeColorKill(x - 1, y - 1, this, squareKey);
          kill.push(id);
>>>>>>> Stashed changes
        }
      }
    }
    setDataToLocal("recommend", recommend);
    setDataToLocal("kill", kill);
  };

  this.inSight = function (id) {
    let x = id.charAt(0);
    let y = parseInt(id.charAt(1));
    x = column.findIndex((value) => value === x);
    let inSight = [];
    if (this.isWhite === true) {
      if (!board.isOutside(x + 1, y + 1)) {
        const id = `${column[x + 1]}${y + 1}`;
        const squareKey = document.getElementById(id).getAttribute("key");
        board.changeColorKill(x + 1, y + 1, this, squareKey);
        inSight.push(id);
      }
      if (!board.isOutside(x - 1, y + 1)) {
        const id = `${column[x - 1]}${y + 1}`;
        const squareKey = document.getElementById(id).getAttribute("key");
        board.changeColorKill(x - 1, y + 1, this, squareKey);
        inSight.push(id);
      }
    } else {
      if (!board.isOutside(x + 1, y - 1)) {
        const id = `${column[x + 1]}${y - 1}`;
        const squareKey = document.getElementById(id).getAttribute("key");
        board.changeColorKill(x + 1, y - 1, this, squareKey);
        inSight.push(id);
      }
      if (!board.isOutside(x - 1, y - 1)) {
        const id = `${column[x - 1]}${y - 1}`;
        const squareKey = document.getElementById(id).getAttribute("key");
        board.changeColorKill(x - 1, y - 1, this, squareKey);
        inSight.push(id);
      }
    }
    setDataToLocal("inSight", inSight);
  }
}

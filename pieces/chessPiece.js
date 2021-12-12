function ChessPiece(name, position, url, key) {
  this.name = name;
  this.position = position;
  this.url = url;
  this.key = key;
  this.setPiece = function () {
    const square = document.getElementById(this.position);
    square.addEventListener("click", () => {
      if (
        !this.isEmpty(this.position) &&
        getDataFromLocal("isWhite") !== this.isWhite
      ) {
        this.isChosen(this.position);
        this.recommendMoves(this.position);
      }
    });
  };
  this.isChosen = function (position) {
    this.isNotChosen();
    document.getElementById(position).classList.add("chosen");
  };
  this.isNotChosen = function () {
    const squares = document.querySelectorAll(`.square`);
    squares.forEach((square) => square.classList.remove("chosen"));
    squares.forEach((square) => square.classList.remove("recommend"));
  };
  this.recommendMoves = function () {};
  this.isEmpty = function (position) {
    const imgLink = document.getElementById(position).firstChild.src;
    return imgLink === link;
  };

  this.checkKill = function (position) {
    const square = document.getElementById(position);
    const chessColor = square.getAttribute("key").slice(0, 5) === "white";
    // console.log(chessColor);
    // if (chessColor === getDataFromLocal("isWhite"))
    // return;
  };
}

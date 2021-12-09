function ChessPiece(name, id, url) {
  this.name = name;
  this.id = id;
  this.url = url;
  this.setPiece = function () {
    const square = document.getElementById(this.id);
    // const img = document.createElement("img")
    // img.src = this.url
    // square.appendChild(img)
    square.firstChild.src = this.url
    square.setAttribute("name", this.name)
    square.addEventListener("click", () => {
      console.log("click");
      if (document.getElementById(this.id).firstChild.src !== link) {
        this.isChosen(this.id);
        this.recommendMoves(this.id);
      }
    })
  }
  this.isChosen = function (id) {
    this.id = id;
    this.isNotChosen();
    document.getElementById(id).classList.add("chosen");
  }
  this.isNotChosen = function () {
    const squares = document.querySelectorAll(`.square`)
    squares.forEach(square => square.classList.remove("chosen"))
  }
  this.recommendMoves = function (id) {
    const pieceName = this.name;
    console.log(pieceName);
    switch (pieceName) {
      case 'pawn':
        this.recommendMovesForPawns(id);
        break;
    }
  };
}
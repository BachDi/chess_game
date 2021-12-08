function ChessPiece(name, id, url) {
  this.name = name;
  this.id = id;
  this.url = url;
  this.setPiece = function () {
    const square = document.getElementById(this.id);
    const img = document.createElement("img")
    img.src = this.url
    square.appendChild(img)
    square.addEventListener("mouseup", () => {
      this.isChosen(this.id);
      this.recommendMoves(this.id);
    })
  }
  this.isChosen = function (id) {
    this.id = id
    document.getElementById(id).classList.add("chosen")
    this.isNotChosen(this.id)
  }
  this.isNotChosen = function (id) {
    const squares = document.querySelectorAll(`.square:not(#${id})`)
    squares.forEach(square => square.classList.remove("chosen"))
  }
  this.recommendMoves = function (id) { };
}
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
      this.chosen(this.id);
      this.recommendMoves(this.id);
      })
  }
  this.chosen = function (id) {
    this.id = id
    console.log(this.id)
  }
  this.recommendMoves = function(id){};
}
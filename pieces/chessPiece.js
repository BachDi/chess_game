function ChessPiece(name, id, url) {
  this.name = name;
  this.id = id;
  this.url = url;
  this.setPiece = function () {
    const square = document.getElementById(this.id);
    const img = document.createElement("img")
    img.src = this.url
    square.appendChild(img)
  }
}
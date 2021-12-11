function ChessPiece(name, position, url, key) {
  this.name = name;
  this.position = position;
  this.url = url;
  this.key = key;
  // this.setPiece = function () {
  //   // const square = document.getElementById(this.position);
  //   // square.firstChild.src = this.url;
  //   // square.setAttribute("name", this.name);
  //   // square.setAttribute("key", this.key);
  //   // square.addEventListener("click", () => {
  //   // if (!this.isEmpty(this.position)) {
  //   //   this.isChosen(this.position);
  //   //   this.recommendMoves(this.position);
  //   //   // this.setNewPosition(this.position);
  //   //   console.log(this.position);
  //   // }
  //   // });
  //   // board.defaultPosition(name, position, url, key);
  // };
  this.isChosen = function (position) {
    console.log("chosen");
    setDataToLocal("isMove", false);
    this.position = position;
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
    if (document.getElementById(position).firstChild.src === link) return true;
  };

  this.setPosition = function (position) {
    this.position = position;
    console.log(this.position);
    console.log(this);
  };
  this.relocatePiece = function (position) {
    const start = document.getElementById(this.position);
    const end = document.getElementById(position);
    console.log("start", this.position, start);
    console.log("end", position, end);
    if (end.classList.contains("recommend")) {
      end.firstChild.src = this.url;
      end.setAttribute("name", this.name);
      end.setAttribute("key", this.key);
      start.firstChild.src = "";
      start.setAttribute("name", "");
      start.setAttribute("key", "");
      start.classList.remove("chosen");
      this.position = position;
      console.log(this);
    }
  };
}

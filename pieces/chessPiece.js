function ChessPiece(name, id, url, key) {
  this.name = name;
  this.id = id;
  this.url = url;
  this.key = key;
  // this.setPiece = function () {
  //   // const square = document.getElementById(this.id);
  //   // square.firstChild.src = this.url;
  //   // square.setAttribute("name", this.name);
  //   // square.setAttribute("key", this.key);
  //   // square.addEventListener("click", () => {
  //   // if (!this.isEmpty(this.id)) {
  //   //   this.isChosen(this.id);
  //   //   this.recommendMoves(this.id);
  //   //   // this.setNewPosition(this.id);
  //   //   console.log(this.id);
  //   // }
  //   // });
  //   // board.defaultPosition(name, id, url, key);
  // };
  this.isChosen = function (id) {
    console.log("chosen");
    setDataToLocal("isMove", false);
    this.id = id;
    this.isNotChosen();
    document.getElementById(id).classList.add("chosen");
  };
  this.isNotChosen = function () {
    const squares = document.querySelectorAll(`.square`);
    squares.forEach((square) => square.classList.remove("chosen"));
    squares.forEach((square) => square.classList.remove("recommend"));
  };
  this.recommendMoves = function () {};
  this.isEmpty = function (id) {
    if (document.getElementById(id).firstChild.src === link) return true;
  };

  this.setPosition = function (id) {
    this.id = id;
    console.log(this.id);
    console.log(this);
  };
  this.relocatePiece = function (id) {
    const start = document.getElementById(this.id);
    const end = document.getElementById(id);
    console.log("start", this.id, start);
    console.log("end", id, end);
    if (end.classList.contains("recommend")) {
      end.firstChild.src = this.url;
      end.setAttribute("name", this.name);
      end.setAttribute("key", this.key);
      start.firstChild.src = "";
      start.setAttribute("name", "");
      start.setAttribute("key", "");
      start.classList.remove("chosen");
      this.id = id;
      console.log(this);
    }
  };
}

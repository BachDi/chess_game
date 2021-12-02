// const position = [
//   {
//     name: "rookBlack",
//     id: ["a8", "h8"],
//     link: "asset/rook_black.png"
//   },
//   {
//     name: "rookWhite",
//     id: ["a1", "h1"],
//     link: "asset/rook_white.png"
//   },
//   {
//     name: "pawnBlack",
//     id: ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
//     link: "asset/pawn_black.png"
//   },
//   {
//     name: "pawnWhite",
//     id: ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
//     link: "asset/pawn_white.png"
//   },
//   {
//     name: "knightBlack",
//     id: ["b8", "g8"],
//     link: "asset/knight_black.png"
//   },
//   {
//     name: "knightWhite",
//     id: ["b1", "g1"],
//     link: "asset/knight_white.png"
//   },
//   {
//     name: "bishopBlack",
//     id: ["c8", "f8"],
//     link: "asset/bishop_black.png"
//   },
//   {
//     name: "bishopWhite",
//     id: ["c1", "f1"],
//     link: "asset/bishop_white.png"
//   },
//   {
//     name: "queenBlack",
//     id: ["d8"],
//     link: "asset/queen_black.png"
//   },
//   {
//     name: "queenWhite",
//     id: ["d1"],
//     link: "asset/queen_white.png"
//   },
//   {
//     name: "kingBlack",
//     id: ["e8"],
//     link: "asset/king_black.png"
//   },
//   {
//     name: "kingWhite",
//     id: ["e1"],
//     link: "asset/king_white.png"
//   }
// ]

// function ChessPiece(name, id, url) {
//   this.name = name;
//   this.id = id;
//   this.url = url;
//   this.setPieces = function() {
//     const square = document.getElementById(this.id);
//     const img = document.createElement("img")
//     img.src = this.url
//     square.appendChild(img)
//   }
// }

// position.forEach((item, index) => {
//   item.id.forEach(creep => {
//     const newRook = new ChessPiece(item.name, creep, item.link);
//     newRook.setPieces();
//   })
// })
const whiteRook1 = new Rook(true, "a1");
whiteRook1.setPiece();
const whiteRook2 = new Rook(true, "h1");
whiteRook2.setPiece();

const whiteKnight1 = new Knight(true, "b1");
whiteKnight1.setPiece();
const whiteKnight2 = new Knight(true, "g1");
whiteKnight2.setPiece();

const whiteBishop1 = new Bishop(true, "c1");
whiteBishop1.setPiece();
const whiteBishop2 = new Bishop(true, "f1");
whiteBishop2.setPiece();

const whiteQueen = new Queen(true, "d1");
whiteQueen.setPiece();

const whiteKing = new King(true, "e1");
whiteKing.setPiece();

const blackRook1 = new Rook(false, "a8");
blackRook1.setPiece();
const blackRook2 = new Rook(false, "h8");
blackRook2.setPiece();

const blackKnight1 = new Knight(false, "b8");
blackKnight1.setPiece();
const blackKnight2 = new Knight(false, "g8");
blackKnight2.setPiece();

const blackBishop1 = new Bishop(false, "c8");
blackBishop1.setPiece();
const blackBishop2 = new Bishop(false, "f8");
blackBishop2.setPiece();

const blackQueen = new Queen(false, "d8");
blackQueen.setPiece();

const blackKing = new King(false, "e8");
blackKing.setPiece();

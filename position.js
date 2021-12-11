let positions = getDataFromLocal("positions") || [];
const whiteRook1 = new Rook(true, "a1", "whiteRook1");
whiteRook1.setPiece();
positions.push(whiteRook1);
const whiteRook2 = new Rook(true, "h1", "whiteRook2");
whiteRook2.setPiece();
positions.push(whiteRook2);

const whiteKnight1 = new Knight(true, "b1", "whiteKnight1");
whiteKnight1.setPiece();
positions.push(whiteKnight1);
const whiteKnight2 = new Knight(true, "g1", "whiteKnight2");
whiteKnight2.setPiece();
positions.push(whiteKnight2);

const whiteBishop1 = new Bishop(true, "c1", "whiteBishop1");
whiteBishop1.setPiece();
positions.push(whiteBishop1);
const whiteBishop2 = new Bishop(true, "f1", "whiteBishop2");
whiteBishop2.setPiece();
positions.push(whiteBishop2);

const whitePawn1 = new Pawn(true, "a2", "whitePawn1");
whitePawn1.setPiece();
positions.push(whitePawn1);
const whitePawn2 = new Pawn(true, "b2", "whitePawn2");
whitePawn2.setPiece();
positions.push(whitePawn2);
const whitePawn3 = new Pawn(true, "c2", "whitePawn3");
whitePawn3.setPiece();
positions.push(whitePawn3);
const whitePawn4 = new Pawn(true, "d2", "whitePawn4");
whitePawn4.setPiece();
positions.push(whitePawn4);
const whitePawn5 = new Pawn(true, "e2", "whitePawn5");
whitePawn5.setPiece();
positions.push(whitePawn5);
const whitePawn6 = new Pawn(true, "f2", "whitePawn6");
whitePawn6.setPiece();
positions.push(whitePawn6);
const whitePawn7 = new Pawn(true, "g2", "whitePawn7");
whitePawn7.setPiece();
positions.push(whitePawn7);
const whitePawn8 = new Pawn(true, "h2", "whitePawn8");
whitePawn8.setPiece();
positions.push(whitePawn8);

const whiteQueen = new Queen(true, "d1");
whiteQueen.setPiece();
positions.push(whiteQueen);

const whiteKing = new King(true, "e1");
whiteKing.setPiece();
positions.push(whiteKing);

const blackRook1 = new Rook(false, "a8", "blackRook1");
blackRook1.setPiece();
positions.push(blackRook1);
const blackRook2 = new Rook(false, "h8", "blackRook2");
blackRook2.setPiece();
positions.push(blackRook2);

const blackKnight1 = new Knight(false, "b8", "blackKnight1");
blackKnight1.setPiece();
positions.push(blackKnight1);
const blackKnight2 = new Knight(false, "g8", "blackKnigh2");
blackKnight2.setPiece();
positions.push(blackKnight2);

const blackBishop1 = new Bishop(false, "c8", "blackBishop1");
blackBishop1.setPiece();
positions.push(blackBishop1);
const blackBishop2 = new Bishop(false, "f8", "blackBishop2");
blackBishop2.setPiece();
positions.push(blackBishop2);

const blackPawn1 = new Pawn(false, "a7", "blackPawn1");
blackPawn1.setPiece();
positions.push(blackPawn1);
const blackPawn2 = new Pawn(false, "b7", "blackPawn2");
blackPawn2.setPiece();
positions.push(blackPawn2);
const blackPawn3 = new Pawn(false, "c7", "blackPawn3");
blackPawn3.setPiece();
positions.push(blackPawn3);
const blackPawn4 = new Pawn(false, "d7", "blackPawn4");
blackPawn4.setPiece();
positions.push(blackPawn4);
const blackPawn5 = new Pawn(false, "e7", "blackPawn5");
blackPawn5.setPiece();
positions.push(blackPawn5);
const blackPawn6 = new Pawn(false, "f7", "blackPawn6");
blackPawn6.setPiece();
positions.push(blackPawn6);
const blackPawn7 = new Pawn(false, "g7", "blackPawn7");
blackPawn7.setPiece();
positions.push(blackPawn7);
const blackPawn8 = new Pawn(false, "h7", "blackPawn8");
blackPawn8.setPiece();
positions.push(blackPawn8);

const blackQueen = new Queen(false, "d8", "blackQueen");
blackQueen.setPiece();
positions.push(blackQueen);

const blackKing = new King(false, "e8", "blackKing");
blackKing.setPiece();
positions.push(blackKing);

setDataToLocal("position", positions);

// for (i = 3; i < 7; i++) {
//   column.forEach((letter, index) => {
//     if (letter !== "") {
//       let cell = `${letter}${i}`;
//       const emptySquare = new Empty(false, cell);
//       emptySquare.setPiece();
//     }
//   });
// }

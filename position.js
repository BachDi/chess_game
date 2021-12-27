let positions = [];
const whiteRook1 = new Rook(true, "a1", "whiteRook1");
positions.push(whiteRook1);
const whiteRook2 = new Rook(true, "h1", "whiteRook2");
positions.push(whiteRook2);

const whiteKnight1 = new Knight(true, "b1", "whiteKnight1");
positions.push(whiteKnight1);
const whiteKnight2 = new Knight(true, "g1", "whiteKnight2");
positions.push(whiteKnight2);

const whiteBishop1 = new Bishop(true, "c1", "whiteBishop1");
positions.push(whiteBishop1);
const whiteBishop2 = new Bishop(true, "f1", "whiteBishop2");
positions.push(whiteBishop2);

const whitePawn1 = new Pawn(true, "a2", "whitePawn1");
positions.push(whitePawn1);
const whitePawn2 = new Pawn(true, "b2", "whitePawn2");
positions.push(whitePawn2);
const whitePawn3 = new Pawn(true, "c2", "whitePawn3");
positions.push(whitePawn3);
const whitePawn4 = new Pawn(true, "d2", "whitePawn4");
positions.push(whitePawn4);
const whitePawn5 = new Pawn(true, "e2", "whitePawn5");
positions.push(whitePawn5);
const whitePawn6 = new Pawn(true, "f2", "whitePawn6");
positions.push(whitePawn6);
const whitePawn7 = new Pawn(true, "g2", "whitePawn7");
positions.push(whitePawn7);
const whitePawn8 = new Pawn(true, "h2", "whitePawn8");
positions.push(whitePawn8);

const whiteQueen = new Queen(true, "d1", "whiteQueen");
positions.push(whiteQueen);

const whiteKing = new King(true, "e1", "whiteKing");
positions.push(whiteKing);

const blackRook1 = new Rook(false, "a8", "blackRook1");
positions.push(blackRook1);
const blackRook2 = new Rook(false, "h8", "blackRook2");
positions.push(blackRook2);

const blackKnight1 = new Knight(false, "b8", "blackKnight1");
positions.push(blackKnight1);
const blackKnight2 = new Knight(false, "g8", "blackKnigh2");
positions.push(blackKnight2);

const blackBishop1 = new Bishop(false, "c8", "blackBishop1");
positions.push(blackBishop1);
const blackBishop2 = new Bishop(false, "f8", "blackBishop2");
positions.push(blackBishop2);

const blackPawn1 = new Pawn(false, "a7", "blackPawn1");
positions.push(blackPawn1);
const blackPawn2 = new Pawn(false, "b7", "blackPawn2");
positions.push(blackPawn2);
const blackPawn3 = new Pawn(false, "c7", "blackPawn3");
positions.push(blackPawn3);
const blackPawn4 = new Pawn(false, "d7", "blackPawn4");
positions.push(blackPawn4);
const blackPawn5 = new Pawn(false, "e7", "blackPawn5");
positions.push(blackPawn5);
const blackPawn6 = new Pawn(false, "f7", "blackPawn6");
positions.push(blackPawn6);
const blackPawn7 = new Pawn(false, "g7", "blackPawn7");
positions.push(blackPawn7);
const blackPawn8 = new Pawn(false, "h7", "blackPawn8");
positions.push(blackPawn8);

const blackQueen = new Queen(false, "d8", "blackQueen");
positions.push(blackQueen);

const blackKing = new King(false, "e8", "blackKing");
positions.push(blackKing);

setDataToLocal("position", positions);

whiteRook1.setPiece();
whiteRook2.setPiece();
whiteKnight1.setPiece();
whiteKnight2.setPiece();
whiteBishop1.setPiece();
whiteBishop2.setPiece();
whitePawn1.setPiece();
whitePawn2.setPiece();
whitePawn3.setPiece();
whitePawn4.setPiece();
whitePawn5.setPiece();
whitePawn6.setPiece();
whitePawn7.setPiece();
whitePawn8.setPiece();
whiteQueen.setPiece();
whiteKing.setPiece();
blackRook1.setPiece();
blackRook2.setPiece();
blackKnight1.setPiece();
blackKnight2.setPiece();
blackBishop1.setPiece();
blackBishop2.setPiece();
blackPawn1.setPiece();
blackPawn2.setPiece();
blackPawn3.setPiece();
blackPawn4.setPiece();
blackPawn5.setPiece();
blackPawn6.setPiece();
blackPawn7.setPiece();
blackPawn8.setPiece();
blackQueen.setPiece();
blackKing.setPiece();
const position = [
  {
    name: "rookBlack",
    id: ["a8", "h8"],
    link: "asset/rook_black.png"
  },
  {
    name: "rookWhite",
    id: ["a1", "h1"],
    link: "asset/rook_white.png"
  },
  {
    name: "pawnBlack",
    id: ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    link: "asset/pawn_black.png"
  },
  {
    name: "pawnWhite",
    id: ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    link: "asset/pawn_white.png"
  },
  {
    name: "knightBlack",
    id: ["b8", "g8"],
    link: "asset/knight_black.png"
  },
  {
    name: "knightWhite",
    id: ["b1", "g1"],
    link: "asset/knight_white.png"
  },
  {
    name: "bishopBlack",
    id: ["c8", "f8"],
    link: "asset/bishop_black.png"
  },
  {
    name: "bishopWhite",
    id: ["c1", "f1"],
    link: "asset/bishop_white.png"
  },
  {
    name: "queenBlack",
    id: ["d8"],
    link: "asset/queen_black.png"
  },
  {
    name: "queenWhite",
    id: ["d1"],
    link: "asset/queen_white.png"
  },
  {
    name: "kingBlack",
    id: ["e8"],
    link: "asset/king_black.png"
  },
  {
    name: "kingWhite",
    id: ["e1"],
    link: "asset/king_white.png"
  }
]

function setCreep(id, url) {
  const square = document.getElementById(id);
  const img = document.createElement("img")
  img.src = url
  square.appendChild(img)
}


position.forEach((item, index) => {
  item.id.forEach(creep => setCreep(creep, item.link))
  
})

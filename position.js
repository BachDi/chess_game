const position = [
  {
    name: "rookBlack",
    id: "a8",
    link: "asset/rook_black.png"
  },
  {
    name: "rookBlack",
    id:  "h8",
    link: "asset/rook_black.png"
  },
  {
    name: "rookWhite",
    id: "a1",
    link: "asset/rook_white.png"
  },
  {
    name: "rookWhite",
    id: "h1",
    link: "asset/rook_white.png"
  }
]

function creep(id, url) {
  const square = document.getElementById(id);
  const img = document.createElement("img")
  img.src = url
  square.appendChild(img)
}


position.forEach((item, index) => {
  creep(item.id, item.link)
})

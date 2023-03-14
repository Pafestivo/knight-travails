export default function drawPath(path) {
  const chessboard = document.querySelector("#chessboard");

  chessboard.innerHTML = "";
  const table = document.createElement("table");
  for (let i = 8; i >= 1; i--) {
    const row = document.createElement("tr");
    for (let j = 1; j <= 8; j++) {
      const cell = document.createElement("td");
      if (path.some((pos) => pos[0] === i && pos[1] === j)) {
        cell.style.backgroundColor = "lightgreen";
      } else {
        cell.style.backgroundColor = "white";
      }
      cell.innerText = `${j},${i}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  chessboard.appendChild(table);
}
import knightMoves from "./scripts/knightMoves";
import drawPath from "./scripts/DOM";

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const startPos = form.elements.start.value.split(",").map((n) => parseInt(n));
  const targetPos = form.elements.target.value.split(",").map((n) => parseInt(n));
  const path = knightMoves(startPos, targetPos);
  if (path === null) {
    alert("Make sure the numbers are not higher than 8 - and separate them by comma.(n,n)");
  } else {
    drawPath(path);
  }
});
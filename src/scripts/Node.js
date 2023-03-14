export default function Node(row, col) {
  this.row = row;
  this.col = col;

  return {
    row,
    col,
    getPosString() {
      return `${this.row}, ${this.col}`
    }
  }
}
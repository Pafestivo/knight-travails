import Node from "./Node";

const directions = [[1, 2], [-1, 2], [2, 1], [-2, 1], [-2, -1], [2, -1], [1, -2], [-1, -2]]

export default function knightMoves(startPos, targetPos) {

  const queue = []
  const visited = new Set()
  
  const startNode = new Node(startPos[0], startPos[1])
  queue.push([startNode])
  const targetNode = new Node(targetPos[0], targetPos[1])

  while(queue.length) {
    // remove path from queue
    const path = queue.shift()
    // extract the last node of the path(which is the current location of knight)
    const node = path[path.length - 1]

    // process node
    // if it's the correct node
    if(node.row === targetNode.row && node.col === targetNode.col) {
      // return a new array representing the shortest path
      const shortestPath = path.map(pathNode => [pathNode.row, pathNode.col])
      return `You made it in ${shortestPath.length -1} moves! Your path was: | ${shortestPath.join(' | ')} |`
    }
    // if it's not the correct node, add it to the visited array and continue
    visited.add(node.getPosString())

    // add neighbors to queue
    for(let neighbor of getNeighbors(node.row, node.col)) {
      const neighborNode = new Node(neighbor[0], neighbor[1])

      // check if node is is already visited
      if(!visited.has(neighborNode.getPosString())) {
        // if not visited, make a new array of the path + neighbor node, and push it to queue
        queue.push([...path, neighborNode])
      }
    }

    // check if the queue is empty before accessing node properties
    if (!queue.length) {
      break
    }
  }

  // no path found
  return null
}


function getNeighbors(row, col) {
  const neighbors = []

  for (let direction of directions) {
    const rowChange = direction[0]
    const colChange = direction[1]

    const neighborRow = row + rowChange
    const neighborCol = col + colChange

    // Add neighbor to list of neighbors if it is within the bounds of the chessboard
    if (neighborRow > 0 && neighborRow <= 8 && neighborCol > 0 && neighborCol <= 8) {
      neighbors.push([neighborRow, neighborCol])
    }
  }

  return neighbors
}
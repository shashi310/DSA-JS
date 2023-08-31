
// RAT IN A MAZE
// Consider a rat placed at (0, 0) in a square matrix of order N * N. It has
// to reach the destination at (N - 1, N - 1). Find all possible paths that th
// e rat can take to reach from source to destination. The directions in whi
// ch the rat can move are 'U'(up), 'D'(down), 'L' (left), 'R' (right). Value 0
// at a cell in the matrix represents that it is blocked and rat cannot move
// to it while value 1 at a cell in the matrix represents that rat can be trave
// l through it.
// Note: In a path, no cell can be visited more than one time. If the source
// cell is 0, the rat cannot move to any other cell.



function findPaths(arr) {
    const n = arr.length;
    const directions = ['U', 'D', 'L', 'R'];
    const result = [];
  
    function isSafe(x, y) {
      return x >= 0 && x < n && y >= 0 && y < n && arr[x][y] === 1;
    }
  
    function backtrack(x, y, path) {
      if (x === n - 1 && y === n - 1) {
        result.push(path);
        return;
      }
  
      for (const direction of directions) {
        let newX = x;
        let newY = y;
  
        if (direction === 'U') newX--;
        else if (direction === 'D') newX++;
        else if (direction === 'L') newY--;
        else if (direction === 'R') newY++;
  
        if (isSafe(newX, newY)) {
          // Mark the cell as visited by setting it to 0 temporarily
          arr[newX][newY] = 0;
          backtrack(newX, newY, path + direction);
          // Restore the cell to its original value after backtracking
          arr[newX][newY] = 1;
        }
      }
    }
  
    if (arr[0][0] !== 0) {
      // Mark the starting cell as visited by setting it to 0 temporarily
      arr[0][0] = 0;
      backtrack(0, 0, '');
      // Restore the starting cell to its original value after backtracking
      arr[0][0] = 1;
    }
  
    return result;
  }
  
  // Example usage:
  const matrix = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [1, 1, 0, 0],
    [0, 1, 1, 1]
  ];
  
  const paths = findPaths(matrix);
  console.log(paths.join(` `));
  





  

const getAliveNeighborsCount = (grid, rowIndex, columnIndex) => {
  const startRowIndex = Math.max(rowIndex - 1, 0);
  const endRowIndex = Math.min(rowIndex + 1, grid.length - 1) + 1;
  const startColumnIndex = Math.max(columnIndex - 1, 0);
  const endColumnIndex =
    Math.min(columnIndex + 1, grid[rowIndex].length - 1) + 1;

  const count = grid
    .slice(startRowIndex, endRowIndex)
    .flatMap(row => row.slice(startColumnIndex, endColumnIndex))
    .filter(Boolean).length;

  return count - (grid[rowIndex][columnIndex] ? 1 : 0);
};

export const getNextGenerationMatrix = grid =>
  grid.map((row, rowIndex) => {
    return row.map((isAlive, columnIndex) => {
      const aliveNeighborsCount = getAliveNeighborsCount(
        grid,
        rowIndex,
        columnIndex
      );

      if (!isAlive && aliveNeighborsCount === 3) {
        return true;
      }

      if (!isAlive) {
        return false;
      }

      if (aliveNeighborsCount === 2 || aliveNeighborsCount === 3) {
        return true;
      }

      return false;
    });
  });

export const updateMatrixValueAtAddress = (
  matrix,
  rowIndex,
  columnIndex,
  value
) => [
  ...matrix.slice(0, rowIndex),
  [
    ...matrix[rowIndex].slice(0, columnIndex),
    value,
    ...matrix[rowIndex].slice(columnIndex + 1)
  ],
  ...matrix.slice(rowIndex + 1)
];

// const createNeighboursCountMatrix = (grid) => {
//   const matrix = grid.map(row => {
//     return Array.from({ length: row.length }, () => 0);
//   });

//   for (let rowIndex = 0; rowIndex < grid.length; rowIndex++){
//     for (let columnIndex = 0; columnIndex < grid[0].length; columnIndex++) {
//       if (grid[rowIndex][columnIndex]) {
//         for (let row = Math.max(0, rowIndex - 1); row <= Math.min(rowIndex + 1, grid.length - 1); row++) {
//           for (let column = Math.max(0, columnIndex - 1); column <= Math.min(columnIndex + 1, grid[0].length-1); column++) {
//             if (row !== rowIndex && column !== columnIndex) {
//               matrix[row][column]++;
//             }
//           }
//         }
//       }
//     }
//   }

//   return matrix;
// };

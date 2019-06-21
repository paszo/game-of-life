export const updateMatrixValueAtAddress = (matrix, rowIndex, columnIndex, value) => [
  ...matrix.slice(0, rowIndex),
  [
    ...matrix[rowIndex].slice(0, columnIndex),
    value,
    ...matrix[rowIndex].slice(columnIndex + 1)
  ],
  ...matrix.slice(rowIndex + 1)
];

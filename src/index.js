
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return matrix = [];
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i] === undefined) return matrix = [];
    if (i & 1) matrix[i].sort((a, b) => (b - a));
    else matrix[i].sort((a, b) => (a - b));
    
    
  }
  return matrix.flat();
}

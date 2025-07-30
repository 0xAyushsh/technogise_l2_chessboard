
const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

const isValidPosition = (colIndex, row) => colIndex >= 0 && colIndex < 8 && row >= 1 && row <= 8
const colToIndex = (col) => columns.indexOf(col)
const indexToCol = (index) => columns[index]

module.exports = { columns, isValidPosition, colToIndex, indexToCol };
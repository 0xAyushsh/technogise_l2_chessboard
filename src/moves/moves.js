const { columns, isValidPosition, colToIndex, indexToCol } = require('../utils/utils')

// One step forward
const getPawnMoves = (col, row) => {
    let moves = []
    if (row < 8) moves.push(`${col}${row + 1}`)
    return moves
};

const getKingMoves = (col, row) => {
    console.log('wooeaw',col,row)
    let moves = []
    const colIndex = colToIndex(col)

    const directions = [
        [colIndex, row + 1],
        [colIndex, row - 1],
        [colIndex - 1, row],
        [colIndex + 1, row],
        [colIndex - 1, row + 1],
        [colIndex + 1, row + 1],
        [colIndex - 1, row - 1],
        [colIndex + 1, row - 1],
    ]

    for (let [newCol, newRow] of directions){
        if (isValidPosition(newCol, newRow)){
            moves.push(`${indexToCol(newCol)}${newRow}`)
        }
    }
    return moves
}

const getQueenMoves = (col, row) => {
    let moves = []
    const colIndex = colToIndex(col)

    // Horizontal movement 
    for (let i = 0; i < 8; i++) {
        if (i !== colIndex) moves.push(`${columns[i]}${row}`)
    }

    // Vertical movement
    for (let i = 1; i <= 8; i++) {
        if (i !== row) moves.push(`${col}${i}`)
    }

    // Diagonal movement
    let i = colIndex - 1, j = row + 1
    while(isValidPosition(i, j)){
        moves.push(`${indexToCol(i)}${j}`)
        i--;
        j++;

    }
    i = colIndex+ 1; 
    j = row+ 1;

    while(isValidPosition(i,j)){
        moves.push(`${indexToCol(i)}${j}`)
        i++;
        j++;
    }

    i = colIndex- 1; 
    j = row- 1;
    
    while(isValidPosition(i,j)){
        moves.push(`${indexToCol(i)}${j}`)
        i--;
        j--; 

    }
    i = colIndex+ 1;
    j = row- 1;
    while(isValidPosition(i,j)){
        moves.push(`${indexToCol(i)}${j}`);
        i++;
        j--; 
    }

    return moves
}

const getPossibleMoves = (input) => {
    let [piece, position] = input.split(',').map(s => s.trim())
    let col = position[0]
    let row = parseInt(position[1])
    console.log('input',input,col,row)

    switch(piece.toLowerCase()) {
        case 'pawn': 
            return getPawnMoves(col, row);
        case 'king': 
            return getKingMoves(col, row);
        case 'queen': 
            return getQueenMoves(col, row);
        default: 
            throw new Error("Invalid input. Please choose between 'King', 'Queen' or 'Pawn'");
    }
}

module.exports = { getPawnMoves, getKingMoves, getQueenMoves, getPossibleMoves };
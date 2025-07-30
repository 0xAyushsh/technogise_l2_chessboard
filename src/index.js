const { getPossibleMoves } = require('../src/moves/moves.js')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to Chessboard CLI Game");
console.log("Please Enter your inputs as Piece, Postion eg, Pawn, D4");
console.log("You can select from King, Queen, Pawn. More will be updated shortly!")

rl.question('Enter piece and position: ', (answer) => {
    try {
        const moves = getPossibleMoves(answer);
        console.log(`Possible moves: ${moves.join(', ')}`);
    } catch (err) {
        console.error(err.message);
    }
    rl.close();
});

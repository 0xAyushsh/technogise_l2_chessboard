const { getPawnMoves, getKingMoves, getQueenMoves, getPossibleMoves } = require('../src/moves/moves.js')

test('Pawn basic move', () => {
    expect(getPawnMoves('G', 1)).toEqual(['G2']);
});

test('King in center', () => {
    expect(getKingMoves('D', 5).sort()).toEqual(['C4','C5','C6','D4','D6','E4','E5','E6'].sort());
});

test('Queen basic moves', () => {
    const moves = getQueenMoves('E', 4);
    expect(moves).toContain('A4');
    expect(moves).toContain('E8');
    expect(moves).toContain('H1');
});

test('Pawn at row 8', () => {
    expect(getPawnMoves('G', 8)).toEqual([]);
});

test('King in corner', () => {
    expect(getKingMoves('A', 1).sort()).toEqual(['A2','B1','B2'].sort());
});


test('getPossibleMoves invalid', () => {
    expect(() => getPossibleMoves('Dragon, D5')).toThrow();
});
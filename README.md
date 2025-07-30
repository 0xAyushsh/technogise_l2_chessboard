# Chessboard – Chess Piece Move Simulator

This project simulates the possible moves of a single **Pawn**, **King**, or **Queen** on an empty **8×8 chessboard**.  
It is a **Node.js console application** with clean, modular code and **Jest tests** for normal & edge cases.

---

## Features
- Supports **Pawn**, **King**, and **Queen**.
- **Validates inputs** (case-insensitive, proper coordinates A–H & 1–8).
- **Handles edge cases** (corners, board limits, invalid inputs).
- **Interactive CLI** – enter moves like `King, D5` directly.
- **Unit tests** with Jest for all pieces and edge conditions.
- **Easy to extend** (add more pieces later).

---

## Project Structure
```
chessboard/
│
├── src/
│   ├── index.js          # CLI entry point
│   ├── moves/
│   │   └── moves.js      # Movement logic for Pawn, King, Queen
│   └── utils/
│       └── utils.js      # Helper functions (board columns, validation)
│
├── tests/
│   └── moves.test.js     # Jest unit tests for all pieces & edge cases
│
├── package.json          # Project configuration & scripts
├── package-lock.json     # Auto-generated lock file for dependency versions
└── README.md             # Documentation
```

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/chessboard.git
cd chessboard
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the program
```bash
npm start
```
You will be prompted:
```
Chess Move Simulator
Enter input as: Piece, Position (e.g., King, D5)
```
Example:
```
> King, D5
Possible moves: C4, C5, C6, D4, D6, E4, E5, E6
```

---

## Running Tests
```bash
npm test
```
For coverage:
```bash
npm test -- --coverage
```

---

## Examples
### Pawn
```
Input:  Pawn, G1
Output: G2

Input:  Pawn, G8
Output: (no moves)
```
### King
```
Input:  King, D5
Output: C4, C5, C6, D4, D6, E4, E5, E6

Input:  King, A1
Output: A2, B1, B2
```
### Queen
```
Input:  Queen, E4
Output: A4, B4, C4, D4, F4, G4, H4, E1, E2, E3, E5, E6, E7, E8,
        A8, B7, C6, D5, F3, G2, H1, B1, C2, D3, F5, G6, H7
```

---

## Edge Cases Covered
- Pawn at **last rank** (row 8) → cannot move.
- King at **corners** (A1, H8) → only valid surrounding cells.
- Queen at **corners** (A1, H8) → horizontal, vertical, diagonal until edges.
- **Invalid inputs**:
  - Wrong piece (`Dragon, D5`)
  - Invalid position (`King, Z9`)
  - Bad format (`KingD5`)
- **Case-insensitive inputs** (`queen, e4`, `pAwN, g1`).

---

## Assumptions
- Pawn moves **upward only** (1 → 8).
- Only **Pawn**, **King**, and **Queen** are implemented.
- Columns are **A–H**, rows are **1–8**.

---

## Next Steps
- Add **Rook, Bishop, Knight**.
- Add **multiple piece placement**.
- Add **move validation for chained moves**.

---

## Author
**Ayush**  

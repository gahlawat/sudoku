const rows = new Array(9)
const columns = new Array(9)
const squares = new Array(9)

export default function sudoku(board: number[][]): boolean {
  for (let i = 0; i < 9; i++) {
    rows[i] = new Set()
    columns[i] = new Set()
    squares[i] = new Set()
  }

  for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
          let val = board[i][j];
          if (val) {
            if (! isValid(i, j, val)) {
                return false
            }

            rows[i].add(val)
            columns[j].add(val)
            squares[getIndex(i, j)].add(val)
          }
      }
  }

  return solve(0, 0, board)
}

function solve(row: number, col: number, board: number[][]): boolean {
    if (col == 9) {
        col = 0
        row++
    }

    if (row == 9) {
        return true
    }

    let val = board[row][col]
    if (! val) {
        for (let ch = 1; ch <= 9; ch++) {
            if (isValid(row, col, ch)) {
                board[row][col] = ch
                rows[row].add(ch)
                columns[col].add(ch)
                squares[getIndex(row, col)].add(ch)

                if (solve(row, col + 1, board)) {
                    return true
                } else {
                    board[row][col] = 0
                    rows[row].delete(ch)
                    columns[col].delete(ch)
                    squares[getIndex(row, col)].delete(ch)
                }
            }
        }

        return false
    }

    return solve(row, col + 1, board)
}

function isValid(row: number, col: number, ch: number): boolean {
    if (rows[row].has(ch) || columns[col].has(ch) || squares[getIndex(row, col)].has(ch)) {
        return false
    }

    return true
}

function getIndex(row: number, col: number): number {
    return (Math.floor(row / 3) * 3) + Math.floor(col / 3)
}

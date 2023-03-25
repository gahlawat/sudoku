import React from 'react'
import Square from './Square'
import sudoku from './Sudoku'

export default class Puzzle extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            value: [...Array(9)].map(() => Array(9).fill(0)),
            error: '',
        }

        this.onInputChange = this.onInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    onInputChange(event: any, row: number, col: number) {
        const el = event.target.value
        const board = this.state.value
        const re = /^[1-9]$/

        if (re.test(el)) {
            board[row][col] = Number(el)
        } else {
            board[row][col] = 0
        }

        this.setState({value: board})
    }

    handleSubmit(event: any) {
        event.preventDefault()
        const board = this.state.value
        if (sudoku(board)) {
            this.setState({
                value: board,
                error: '',
            })
        } else {
            this.setState({error: "Please provide valid clues!"})
        }
    }

    render() {
        const puzzle = []
        const board = this.state.value
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                puzzle.push(<Square key={i + '-' + j} row={i} col={j} value={board[i][j]} onInputChange={this.onInputChange} />)
            }
            puzzle.push(<br key={i} />)
        }

        return (
            <div className='col'>
                <form onSubmit={this.handleSubmit}>
                    {puzzle}
                    <input className='mt-5 btn btn-primary' type='submit' value='Solve' />
                    <p className='text-danger mb-0'>{ this.state.error }</p>
                </form>
            </div>
        )
    }
}

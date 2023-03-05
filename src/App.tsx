import Puzzle from './Puzzle'

function App() {
  return (
    <div className='container-fluid text-center d-grid gap-5'>
      <div className='col mt-5'>
        <h1>Sudoku Solver</h1>
      </div>
      <Puzzle />
      <div className='col-12 card'>
        <h5 className='card-header'>How to use</h5>
        <p className='card-body'>Input the clues of any sudoku here and click 'Solve' to generate the solution.</p>
      </div>
    </div>
  )
}

export default App

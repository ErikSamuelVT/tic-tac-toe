import { useState } from "react";
import Square from "./components/Square";
import { calculateWinner } from "./services/calculateWinner";

const App = () => {
  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return
    }
    const nextSquares = squares.slice()
    if (xIsNext) {
      nextSquares[i] = "X"
    } else {
      nextSquares[i] = "O"
    }
    setXIsNext(!xIsNext)
    setSquares(nextSquares)

  }

  const resetGame = () => {
    setXIsNext(true)
    setSquares(Array(9).fill(null))
  }

  const winner = calculateWinner(squares)
  console.log(winner)
  let status
  if (winner) {
    status = "Winner: " + winner
  } else {
    status = "Next player: " + (xIsNext ? 'X' : 'O')
  }

  return (
    <main className="
    bg-app
    flex 
    flex-col
    h-screen
    items-center
    justify-center
    ">
      <div className="flex justify-around items-center">
        <h3 className="font-sans text-white font-semibold my-5 text-2xl mx-5">{status}</h3>
        {winner ? <button className="mb-2 bg-white text-slate-900 rounded-md w-28 h-10 hover:bg-slate-200" onClick={resetGame}>New game</button> : <button className="mb-2 bg-white text-slate-900 rounded-md w-28 h-10 hover:bg-slate-200" onClick={resetGame}>Reset</button>}
      </div>
      <div className="flex">
        <div>
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div>
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div>
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </main>
  )
}

export default App
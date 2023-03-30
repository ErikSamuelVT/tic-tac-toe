function Square({ value, onSquareClick }) {
  return (
    <div className="
    border-2
  border-yellow-200
    w-36 h-36
    ">
      <button
        className="
        bg-transparent w-full h-full
        font-semibold
        text-2xl
        text-white

      "
        onClick={onSquareClick}
      >
        {value}
      </button>
    </div>
  )
}

export default Square   
import { useState } from 'react';
import styles from '../styles/tictactoe.module.css';

function Square ({value, onSquareClick}) {
    return <button className={styles.square} onClick={onSquareClick}>
        {value}
    </button>
}

function Board () {
    
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function HandleCkick (i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';    
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next Player: " + (xIsNext? "X" : "O");
    }

    return (
        <>
            <div className={styles.main_div}>
                <div className={styles.second_div}>
                    <div className="status">{status}</div>
                    <div>
                        <div>
                            <Square value={squares[0]} onSquareClick={() => HandleCkick(0)} />
                            <Square value={squares[1]} onSquareClick={() => HandleCkick(1)} />
                            <Square value={squares[2]} onSquareClick={() => HandleCkick(2)} />
                        </div>
                        <div>
                            <Square value={squares[3]} onSquareClick={() => HandleCkick(3)} />
                            <Square value={squares[4]} onSquareClick={() => HandleCkick(4)} />
                            <Square value={squares[5]} onSquareClick={() => HandleCkick(5)} />
                        </div>
                        <div>
                            <Square value={squares[6]} onSquareClick={() => HandleCkick(6)} />
                            <Square value={squares[7]} onSquareClick={() => HandleCkick(7)} />
                            <Square value={squares[8]} onSquareClick={() => HandleCkick(8)} />
                        </div>
                    </div>
                </div>
                <div className={styles.second_div}>
                    <h4>Histórico de jogadas</h4>
                </div>
            </div>
            <div className={styles.div_foot}>
                <h3>Voltar</h3>
                <h3>Reset</h3>
            </div>
        </>
        )}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Board
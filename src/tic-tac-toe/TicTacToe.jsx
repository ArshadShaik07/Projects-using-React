import { useState, useEffect } from "react";
import "./styles.css";

function Square(props) {
  return (
    <button onClick={props.onclick} className="game-btn">
      {props.value}
    </button>
  );
}

function TicTacToe() {
  const [Xturn, setXturn] = useState(true);
  const [values, setValues] = useState(Array(9).fill(""));
  const [status, setStatus] = useState("");

  function getWinner(values) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      let [a, b, c] = winningPatterns[i];
      if (values[a] && values[a] === values[b] && values[a] === values[c]) {
        return values[a];
      }
    }
    return false;
  }

  function handleClick(i) {
    let cpyVal = [...values];
    if (cpyVal[i] !== "" || getWinner(values)) {
      return null;
    }
    cpyVal[i] = Xturn ? "X" : "O";
    setValues(cpyVal);
    setXturn(!Xturn);
  }

  useEffect(() => {
    if (!getWinner(values) && values.every((a) => a !== "")) {
      setStatus("This is a draw ! 😐 Restart the game");
    } else if (getWinner(values)) {
      setStatus(`The winner is ${getWinner(values)}`);
    } else {
      setStatus(`${Xturn ? "X" : "O"} turn`);
    }
  }, [Xturn, values]);

  return (
    <div className="game-container">
      <div className="row">
        <Square
          value={values[0]}
          onclick={() => {
            handleClick(0);
          }}
        />
        <Square
          value={values[1]}
          onclick={() => {
            handleClick(1);
          }}
        />
        <Square
          value={values[2]}
          onclick={() => {
            handleClick(2);
          }}
        />
      </div>
      <div className="row">
        <Square
          value={values[3]}
          onclick={() => {
            handleClick(3);
          }}
        />
        <Square
          value={values[4]}
          onclick={() => {
            handleClick(4);
          }}
        />
        <Square
          value={values[5]}
          onclick={() => {
            handleClick(5);
          }}
        />
      </div>
      <div className="row">
        <Square
          value={values[6]}
          onclick={() => {
            handleClick(6);
          }}
        />
        <Square
          value={values[7]}
          onclick={() => {
            handleClick(7);
          }}
        />
        <Square
          value={values[8]}
          onclick={() => {
            handleClick(8);
          }}
        />
      </div>
      <h2>{status}</h2>
      <button
        onClick={() => {
          setValues(Array(9).fill(""));
          setXturn(true);
        }}
        className="restart-btn"
      >
        Restart game
      </button>
    </div>
  );
}

export default TicTacToe;

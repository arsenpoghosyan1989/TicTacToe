import React, { useState } from "react";
import Cells from "./components/cells";
import "./App.css";

const App = () => {
  const [cells, setCells] = useState([
    { val: "", status: true, id: 1 },
    { val: "", status: true, id: 2 },
    { val: "", status: true, id: 3 },
    { val: "", status: true, id: 4 },
    { val: "", status: true, id: 5 },
    { val: "", status: true, id: 6 },
    { val: "", status: true, id: 7 },
    { val: "", status: true, id: 8 },
    { val: "", status: true, id: 9 },
  ]);
  const [player, setPlayer] = useState("x");
  const [winner, setWinner] = useState(false);

  function clickHandler(id) {
    console.log(player);
    let currentPlayer = player;
    let newCells = cells.map((cell) => {
      if (cell.status && cell.id === id) {
        setPlayer(player === "x" ? "o" : "x");
        return { val: player, status: false, id };
      }
      return cell;
    });
    setCells(newCells);
    checkWinner(newCells, currentPlayer);
  }
  function checkWinner(newCells, player) {
    if (
      (newCells[0].val === player &&
        newCells[1].val === player &&
        newCells[2].val === player) ||
      (newCells[3].val === player &&
        newCells[4].val === player &&
        newCells[5].val === player) ||
      (newCells[6].val === player &&
        newCells[7].val === player &&
        newCells[8].val === player) ||
      (newCells[0].val === player &&
        newCells[3].val === player &&
        newCells[6].val === player) ||
      (newCells[1].val === player &&
        newCells[4].val === player &&
        newCells[7].val === player) ||
      (newCells[2].val === player &&
        newCells[5].val === player &&
        newCells[8].val === player) ||
      (newCells[0].val === player &&
        newCells[4].val === player &&
        newCells[8].val === player) ||
      (newCells[2].val === player &&
        newCells[4].val === player &&
        newCells[6].val === player)
    ) {
      setWinner(player);
    } else {
      let ended = true;
      newCells.forEach(({ status }) => {
        if (status === true) ended = false;
      });
      if (ended) {
        console.log(newCells);
        setWinner("no One");
      }
    }
  }
  return (
    <div>
      {winner === false ? (
        <div>
          <Cells cells={cells} clickHandler={clickHandler} />
          <h1>next player is: {player}</h1>
        </div>
      ) : (
        <h2>winner is {winner}</h2>
      )}
    </div>
  );
};

export default App;

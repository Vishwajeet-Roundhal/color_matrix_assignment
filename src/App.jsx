import { useState } from "react";
import "./App.css";

function App() {
  const [matrix, setMatrix] = useState(Array(9).fill("white"));
  const [click, setClick] = useState([]);

  const handleClick = (index) => {
    if (matrix[index] == "white") {
      const newMatrix = [...matrix]; // copy of curr matrix
      newMatrix[index] = "green";
      setMatrix(newMatrix);

      const clickOrder = [...click, index];
      setClick(clickOrder);
      console.log(clickOrder);
      if (clickOrder.length === 9) {
        // change to orange
        changeToOrange(clickOrder);
      }
    }
  };

  const changeToOrange = (click) => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < click.length) {
        setMatrix((prev) => {
          const newMatrix = [...prev];
          newMatrix[click[i]] = "orange";
          return newMatrix;
        });
        i++;
      } else {
        setMatrix(Array(9).fill("orange"));
      }
    }, 500);
  };
  return (
    <div className="matrix">
      <div className="row">
        <div
          className="cell"
          style={{ backgroundColor: matrix[0] }}
          onClick={() => handleClick(0)}
        ></div>
        <div
          className="cell"
          style={{ backgroundColor: matrix[1] }}
          onClick={() => handleClick(1)}
        ></div>
        <div
          className="cell"
          style={{ backgroundColor: matrix[2] }}
          onClick={() => handleClick(2)}
        ></div>
      </div>
      <div className="row">
        <div
          className="cell"
          style={{ backgroundColor: matrix[3] }}
          onClick={() => handleClick(3)}
        ></div>
        <div
          className="cell"
          style={{ backgroundColor: matrix[4] }}
          onClick={() => handleClick(4)}
        ></div>
        <div
          className="cell"
          style={{ backgroundColor: matrix[5] }}
          onClick={() => handleClick(5)}
        ></div>
      </div>
      <div className="row">
        <div
          className="cell"
          style={{ backgroundColor: matrix[6] }}
          onClick={() => handleClick(6)}
        ></div>
        <div
          className="cell"
          style={{ backgroundColor: matrix[7] }}
          onClick={() => handleClick(7)}
        ></div>
        <div
          className="cell"
          style={{ backgroundColor: matrix[8] }}
          onClick={() => handleClick(8)}
        ></div>
      </div>
    </div>
  );
}

export default App;

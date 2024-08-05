import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  //once done reorganize code
  const [option, setOption] = useState(0);
  const [result, setResult] = useState(0);
  const [comp, setComp] = useState("");

  function handleClick(sliderValue) {
    setOption(sliderValue);
  }
  function handleComp(textToAppend) {
    setComp((prevValue) => prevValue + textToAppend);
  }

  function handleDelete() {
    setComp((prevValue) => prevValue.slice(0, -1));
  }

  const value = parseFloat(option);

  function handleOperation(operation) {
    switch (operation) {
      case "+":
        setResult(result + value);
        break;
      case "-":
        setResult(result - value);
        break;
      case "X":
        setResult(result * value);
        break;
      case "/":
        setResult(result / value);
        break;
      default:
        break;
    }
    setComp(""); // resetting after computation
  }

  return (
    <div className="calc-container">
      <div className="calc-header">
        <div className="calc-header-title">
          <h3>Calc</h3>
        </div>
        <div className="calc-themes">
          <div className="theme-text">
            <p>Theme</p>
          </div>
          <div className="calc-theme-slider">
            <div className="slider-opt">
              <p onClick={() => handleClick(0)}>1</p>
              <p onClick={() => handleClick(1)}>2</p>
              <p onClick={() => handleClick(2)}>3</p>
            </div>
            <div className="input-slider">
              {" "}
              <input
                className="slider"
                value={option}
                type="range"
                min="0"
                max="2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="calc-amt">
        <input
          type="text"
          value={comp}
          onChange={(e) => setComp(e.target.value)}
        />
      </div>
      <div className="calc-keyboard">
        <div className="calc-options">
          <div className="calc-button">
            <button onClick={() => handleComp(7)}>7</button>
          </div>
          <div className="calc-button">
            <button onClick={() => handleComp(8)}>8</button>
          </div>
          <div className="calc-button">
            <button onClick={() => handleComp(9)}>9</button>
          </div>
          <div className="calc-button-operator del">
            <button onClick={handleDelete}>DEL</button>
          </div>
          <div className="calc-button">
            <button onClick={() => handleComp(4)}>4</button>
          </div>
          <div className="calc-button">
            <button onClick={() => handleComp(5)}>5</button>
          </div>
          <div className="calc-button">
            <button onClick={() => handleComp(6)}>6</button>
          </div>
          <div className="calc-button-operator">
            <button onClick={(e) => handleOperation(e.target.value)}>+</button>
          </div>
          <div className="calc-button">
            <button onClick={() => handleComp(1)}>1</button>
          </div>
          <div className="calc-button">
            <button onClick={() => handleComp(2)}>2</button>
          </div>
          <div className="calc-button">
            <button onClick={() => handleComp(3)}>3</button>
          </div>
          <div className="calc-button-operator">
            <button onClick={(e) => handleOperation(e.target.value)}>-</button>
          </div>
          <div className="calc-button-operator">
            <button>.</button>
          </div>
          <div className="calc-button">
            <button onClick={() => handleComp(0)}>0</button>
          </div>
          <div className="calc-button-operator">
            <button onClick={(e) => handleOperation(e.target.value)}>/</button>
          </div>
          <div className="calc-button-operator">
            <button onClick={(e) => handleOperation(e.target.value)}>X</button>
          </div>
        </div>
        <div className="calc-buttom-ops">
          <div className="bottom reset">
            <button>RESET</button>
          </div>
          <div className="bottom equals">
            <button>{result} =</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

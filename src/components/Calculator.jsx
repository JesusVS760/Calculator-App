import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [comp, setComp] = useState(""); // Input and current operation
  const [result, setResult] = useState(null); // To store the final result
  const [currentOperation, setCurrentOperation] = useState(null); // Track the current operation
  const [displayResult, setDisplayResult] = useState(false); // Track if we should display the result

  function handleComp(textToAppend) {
    setComp((prevValue) => prevValue + textToAppend);
  }

  function handleDelete() {
    setComp((prevValue) => prevValue.slice(0, -1));
  }

  function handleOperation(operation) {
    // If there's an existing operation, calculate the result
    if (currentOperation && comp) {
      const value = parseFloat(comp);
      if (!isNaN(value)) {
        switch (currentOperation) {
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
      }
      setComp(""); // Clear input after the operation
    } else if (comp) {
      // Initialize result with the current input if no previous operation
      setResult(parseFloat(comp));
      setComp(""); // Clear input after the operation
    }
    setCurrentOperation(operation); // Set the current operation
  }

  function handleEquals() {
    if (currentOperation && comp) {
      const value = parseFloat(comp);
      if (!isNaN(value)) {
        switch (currentOperation) {
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
      }
      setComp(""); // Clear input after computing
      setCurrentOperation(null); // Reset the operation
      setDisplayResult(true); // Display the result
    }
  }

  function handleReset() {
    setComp("");
    setResult(null);
    setDisplayResult(false);
    setCurrentOperation(null);
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
              <input className="slider" type="range" min="0" max="2" readOnly />
            </div>
          </div>
        </div>
      </div>
      <div className="calc-amt">
        <input
          type="text"
          value={displayResult ? result : comp}
          onChange={(e) => setComp(e.target.value)}
        />
      </div>
      <div className="calc-keyboard">
        <div className="calc-options">
          <div className="calc-button">
            <button onClick={() => handleComp("7")}>7</button>
          </div>
          <div className="calc-button">
            <button onClick={() => handleComp("8")}>8</button>
          </div>
          <div className="calc-button">
            <button onClick={() => handleComp("9")}>9</button>
          </div>
          <div className="calc-button-operator del">
            <button onClick={handleDelete}>DEL</button>
          </div>
          <div className="calc-button">
            <button onClick={() => handleComp("4")}>4</button>
          </div>
          <div className="calc-button">
            <button onClick={() => handleComp("5")}>5</button>
          </div>
          <div className="calc-button">
            <button onClick={() => handleComp("6")}>6</button>
          </div>
          <div className="calc-button-operator">
            <button onClick={() => handleOperation("+")}>+</button>
          </div>
          <div className="calc-button">
            <button onClick={() => handleComp("1")}>1</button>
          </div>
          <div className="calc-button">
            <button onClick={() => handleComp("2")}>2</button>
          </div>
          <div className="calc-button">
            <button onClick={() => handleComp("3")}>3</button>
          </div>
          <div className="calc-button-operator">
            <button onClick={() => handleOperation("-")}>-</button>
          </div>
          <div className="calc-button-operator">
            <button onClick={() => handleComp(".")}>.</button>
          </div>
          <div className="calc-button">
            <button onClick={() => handleComp("0")}>0</button>
          </div>
          <div className="calc-button-operator">
            <button onClick={() => handleOperation("/")}>/</button>
          </div>
          <div className="calc-button-operator">
            <button onClick={() => handleOperation("X")}>X</button>
          </div>
        </div>
        <div className="calc-bottom-ops">
          <div className="bottom reset">
            <button onClick={handleReset}>RESET</button>
          </div>
          <div className="bottom equals">
            <button onClick={handleEquals}>
              {result !== null ? result : ""} ={" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

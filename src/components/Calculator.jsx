import React, { useState } from "react";
import "./Calculator.css";

const Calculator = ({ onSendData }) => {
  const [comp, setComp] = useState(""); // Input and current operation
  const [result, setResult] = useState(null); // To store the final result
  const [currentOperation, setCurrentOperation] = useState(null); // Track the current operation
  const [displayResult, setDisplayResult] = useState(false); // Track if we should display the result
  const [slider, setSlider] = useState(0);
  const [keyboard, setKeyboard] = useState("calc-keyboard");
  const [inputBackground, setInputBackground] = useState("calc-amt");
  const [buttonStyle, setButtonStyle] = useState("calc-button");
  const [headerStyle, setHeaderStyle] = useState("calc-header");
  //used for callback function

  const changeBackground = (backgroundReceived) => {
    if (backgroundReceived === 0) {
      let background = "app-container";
      onSendData(background); // call the callback function with background data
      setKeyboard("calc-keyboard");
      setInputBackground("calc-amt");
      setButtonStyle("calc-button");
      setHeaderStyle("calc-header");
    } else if (backgroundReceived === 1) {
      let background = "app-container-2";
      onSendData(background); // call the callback function with background data
      setKeyboard("calc-keyboard-2");
      setInputBackground("calc-amt-2");
      setButtonStyle("calc-button-2");
      setHeaderStyle("calc-header-2");
    } else {
      let background = "app-container-3";
      onSendData(background); // call the callback function with background data
      setKeyboard("calc-keyboard-3");
      setInputBackground("calc-amt-3");
      setButtonStyle("calc-button-3");
      setHeaderStyle("calc-header-3");
    }
  };

  function handleComp(textToAppend) {
    setComp((prevValue) => prevValue + textToAppend);
  }

  function handleDelete() {
    if (displayResult) {
      // Reset display when the result is shown
      // setComp("");
      setDisplayResult(false);
    } else {
      // Remove the last character from the input
      setComp((prevValue) => prevValue.slice(0, -1));
    }
  }

  function handleOperation(operation) {
    if (currentOperation && comp) {
      const value = parseFloat(comp);
      if (value) {
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
    } else if (comp) {
      // Initialize result with the current input if no previous operation
      setResult(parseFloat(comp));
      setComp(""); // Clear input after the operation
    }
    setCurrentOperation(operation); // Set the current operation
    setDisplayResult(true);
  }
  function handleEquals() {
    handleOperation(comp);
  }

  function handleReset() {
    setComp("");
    setResult(null);
    setDisplayResult(false);
    setCurrentOperation(null);
  }
  function handleSliderChange(value) {
    setSlider(value);
    changeBackground(value);
  }

  return (
    <div className="calc-wrapper">
      <div className={headerStyle}>
        <div className="calc-header-title">
          <h3>Calc</h3>
        </div>
        <div className="calc-themes">
          <div className="theme-text">
            <p>Theme</p>
          </div>
          <div className="calc-theme-slider">
            <div className="slider-opt">
              <p onClick={() => handleSliderChange(0)}>1</p>
              <p onClick={() => handleSliderChange(1)}>2</p>
              <p onClick={() => handleSliderChange(2)}>3</p>
            </div>
            <div className="input-slider">
              <input
                className="slider"
                value={slider}
                type="range"
                min="0"
                max="2"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
      <div className={inputBackground}>
        <input
          type="text"
          value={displayResult ? result : comp}
          onChange={(e) => setComp(e.target.value)}
          disabled
        />
      </div>
      <div className={keyboard}>
        <div className="calc-options">
          <div className={buttonStyle}>
            <button onClick={() => handleComp("7")}>7</button>
          </div>
          <div className={buttonStyle}>
            <button onClick={() => handleComp("8")}>8</button>
          </div>
          <div className={buttonStyle}>
            <button onClick={() => handleComp("9")}>9</button>
          </div>
          <div className="calc-button-operator del">
            <button onClick={handleDelete}>DEL</button>
          </div>
          <div className={buttonStyle}>
            <button onClick={() => handleComp("4")}>4</button>
          </div>
          <div className={buttonStyle}>
            <button onClick={() => handleComp("5")}>5</button>
          </div>
          <div className={buttonStyle}>
            <button onClick={() => handleComp("6")}>6</button>
          </div>
          <div className="calc-button-operator">
            <button onClick={() => handleOperation("+")}>+</button>
          </div>
          <div className={buttonStyle}>
            <button onClick={() => handleComp("1")}>1</button>
          </div>
          <div className={buttonStyle}>
            <button onClick={() => handleComp("2")}>2</button>
          </div>
          <div className={buttonStyle}>
            <button onClick={() => handleComp("3")}>3</button>
          </div>
          <div className="calc-button-operator">
            <button onClick={() => handleOperation("-")}>-</button>
          </div>
          <div className="calc-button-operator">
            <button onClick={() => handleComp(".")}>.</button>
          </div>
          <div className={buttonStyle}>
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
            <button onClick={handleEquals}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

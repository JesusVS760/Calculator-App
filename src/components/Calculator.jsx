import React from "react";
import "./Calculator.css";

const Calculator = () => {
  return (
    <div className="calc-container">
      <div className="calc-header">
        <div className="calc-header-title">
          <h3>Calc</h3>
        </div>
        <div className="calc-themes">
          <p>Theme</p>
          <div className="calc-theme-slider">
            <span>1 2 3</span>
            <div></div>
          </div>
        </div>
      </div>
      <div className="calc-amt">
        <input type="text" />
      </div>
      <div className="calc-keyboard">
        <div className="calc-options">
          <div className="calc-button">
            <button>7</button>
          </div>
          <div className="calc-button">
            <button>8</button>
          </div>
          <div className="calc-button">
            <button>9</button>
          </div>
          <div className="calc-button-operator del">
            <button>DEL</button>
          </div>
          <div className="calc-button">
            <button>4</button>
          </div>
          <div className="calc-button">
            <button>5</button>
          </div>
          <div className="calc-button">
            <button>6</button>
          </div>
          <div className="calc-button-operator">
            <button>+</button>
          </div>
          <div className="calc-button">
            <button>1</button>
          </div>
          <div className="calc-button">
            <button>2</button>
          </div>
          <div className="calc-button">
            <button>3</button>
          </div>
          <div className="calc-button-operator">
            <button>-</button>
          </div>
          <div className="calc-button-operator">
            <button>.</button>
          </div>
          <div className="calc-button">
            <button>0</button>
          </div>
          <div className="calc-button-operator">
            <button>/</button>
          </div>
          <div className="calc-button-operator">
            <button>X</button>
          </div>
        </div>
        <div className="calc-buttom-ops">
          <div className="bottom reset">
            <button>RESET</button>
          </div>
          <div className="bottom equals">
            <button>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

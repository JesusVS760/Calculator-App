import React, { useState } from "react";
import Calculator from "./components/Calculator";
import "./App.css";

const App = () => {
  const [background, setBackground] = useState(null);

  const handleChangeBackground = (backgroundFound) => {
    console.log(backgroundFound);
    setBackground(backgroundFound);
  };

  return (
    <div className={background}>
      <Calculator onSendData={handleChangeBackground} />
    </div>
  );
};

export default App;

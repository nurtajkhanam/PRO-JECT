import "./App.css";
import React from "react";
import Hello from "./Hello";
import KgButton from "./KgButton";
import Random from "./Random";

const App = () => {
  return (
    <div>
      <Random />
      <Hello />
      <KgButton />
    </div>
  );
};

export default App;

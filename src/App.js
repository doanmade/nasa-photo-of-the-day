import React from "react";
import "./App.css";
import NASAPhoto from "./components/potd/NASAPhoto";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <NASAPhoto />
    </div>
  );
}

export default App;

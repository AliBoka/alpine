import React from "react";
import Bottom from "./components/Bottom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import './index.css'

function App() {
  return (
    <div className="app h-auto bg-contain  bg-no-repeat">
      <Navbar/>
      <Main/>
      <Bottom/>
    </div>
  );
}

export default App;

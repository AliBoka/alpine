import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import './index.css'

function App() {
  return (
    <div className="bg-first-bg h-[3000px] bg-contain bg-no-repeat">
      <Navbar/>
      <Main/>
    </div>
  );
}

export default App;

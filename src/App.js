import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Homepage from "./pages/Homepage";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" exact element={<Homepage/>} />
      </Routes>
    </div>
  );
}

export default App;

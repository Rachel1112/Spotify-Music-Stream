import logo from './logo.svg';
import React, { useState,useEffect, useMemo } from "react";
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route exact path="/" element={<Login/>} />
            </Routes> 
          </Router>
    </div>
  );
}

export default App;

import "../App.css";
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Map from "./Map";
import Creator from "./Creator";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Map" element={<Map/>} />
        <Route path="/Creator" element={<Creator />} />
      </Routes>
    </div>
  );
};

export default App;

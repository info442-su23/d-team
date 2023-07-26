import "../App.css";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Map from "./map";
import Creator from "./Creator";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/map" element={<Map/>} />
        <Route path="/Creator" element={<Creator />} />
      </Routes>
    </div>
  );
};

export default App;

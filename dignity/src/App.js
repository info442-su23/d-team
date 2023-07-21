import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import { useState } from "react";
import "./App.css";
import Map from "./map"

const App = () => {
  return (
    <div className="App">
      <Map />
    </div>
  );
};

export default App;

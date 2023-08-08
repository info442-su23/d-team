import React from "react";
import "./style.css";

export const OnHover = () => {
  return (
    <div className="hover">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <h1 className="text-wrapper">Sacred Heart Shelter</h1>
          <p className="p">Volunteers needed to hand out food during food drive hosted at Sacred Heart Seattle.</p>
          <div className="overlap">
            <img className="circle" alt="Circle" src="circle.svg" />
          </div>
          <div className="div">X</div>
          <div className="overlap-2">
            <div className="rectangle" />
            <p className="august">
              August 30, 2023
              <br />
              <br />
              12:30 - 3:30 Pm
              <br />
              <br />
              25 Volunteers Needed
            </p>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-2">Interested?</div>
          </div>
        </div>
      </div>
    </div>
  );
};
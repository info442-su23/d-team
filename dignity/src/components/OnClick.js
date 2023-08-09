import React from "react";
import "../App.css";

export function OnClick ({Organization_Name, Address, Date_Start, Time_Start, Time_End, Type, Volunteers, Details}) {
  console.log(Organization_Name);
  return (
    <div className="onClick" >
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="overlap">
            <h1 className="text-wrapper">{Organization_Name}</h1>
          </div>
          <div className="div">
            <div className="circle-wrapper">
              <img className="circle" alt="Circle" src="circle.svg" />
            </div>
            <div className="overlap-2">
              <p className="date-august">
                <span className="span">Date: </span>
                <span className="text-wrapper-2">
                  {Date_Start}
                  <br />
                  <br />
                </span>
                <span className="span">Time:</span>
                <span className="text-wrapper-2">
                  {" "}
                  {Time_Start} - {Time_End}
                  <br />
                  <br />
                </span>
                <span className="span">Volunteers Needed: </span>
                <span className="text-wrapper-2">
                  {Volunteers}
                  <br />
                  <br />
                </span>
                <span className="span">Location:</span>
                <span className="text-wrapper-2"> 232 Warren Ave N, Seattle, WA 98109 </span>
              </p>
              <div className="rectangle" />
              <p className="the-sacred-heart">
                {Details}}
              </p>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-3">Sign Up</div>
          </div>
          <div className="text-wrapper-4">X</div>
        </div>
      </div>
    </div>
  );
};


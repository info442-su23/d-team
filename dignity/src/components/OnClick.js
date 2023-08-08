import React from "react";
import "./style.css";

export const OnClick = () => {
  return (
    <div className="onClick">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="overlap">
            <h1 className="text-wrapper">Sacred Heart Shelter</h1>
          </div>
          <div className="div">
            <div className="circle-wrapper">
              <img className="circle" alt="Circle" src="circle.svg" />
            </div>
            <div className="overlap-2">
              <p className="date-august">
                <span className="span">Date: </span>
                <span className="text-wrapper-2">
                  August 30, 2023
                  <br />
                  <br />
                </span>
                <span className="span">Time:</span>
                <span className="text-wrapper-2">
                  {" "}
                  12:30 - 3:30 pM
                  <br />
                  <br />
                </span>
                <span className="span">Volunteers Needed: </span>
                <span className="text-wrapper-2">
                  25
                  <br />
                  <br />
                </span>
                <span className="span">Location:</span>
                <span className="text-wrapper-2"> 232 Warren Ave N, Seattle, WA 98109 </span>
              </p>
              <div className="rectangle" />
              <p className="the-sacred-heart">
                The Sacred Heart Shelter Is Looking For Volunteers Willing To Come Hand Out Food To The Local Homeless
                Population During Our Weekly Food Drive. As A Volunteer You Will Come To The Shelter Before The Drive
                Begins And Help Set Up For The Food Drive.after Set Up You Will Be Assigned A Station Where You Will Be
                Responsible For Handing Out Food From. This Is A Great Opportunity To Help Your Community And Provide
                Food For The Local Homeless Population.
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
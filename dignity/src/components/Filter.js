import React, { useState } from "react";
import "../App.css";
//import { useNavigate } from "react-router-dom";

export function Filter({setShowFilter, filterCallback}) {

  const [errorMessage, setErrorMessage] = useState('');

  //const navigate = useNavigate()
  const handleFilterApply = () => {
    let zipCode = document.getElementById("zipcode").value;
    if(/^\d{5}(-\d{4})?$/.test(zipCode) === false && zipCode !== '') {
      setErrorMessage('Please enter a valid zipcode or leave blank');
    } else {
      setErrorMessage('');
      setShowFilter(false);
    //console.log(zipCode);
      let type = '';
      if (document.getElementById("type").value !== "Any location") {
        type = document.getElementById("type").value;
      }
      
      //console.log(type);
      let virtual = 'No';
      if (document.getElementById("place").value === "Virtual") {
        virtual = "Yes";
      }
      //console.log(virtual);
      filterCallback(type, virtual, zipCode);
    }
  }

  /*const handleFilterReset = () => {
    setShowFilter(false);
    navigate("/Map");
  }*/

  return (
    <div className="modal-overlay">
      <div className="modal" style={{ width: '300px', height: '540px' }}>
      <div className="filter">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <h1 className="text-wrapper">Filters</h1>
            <h2>Enter Zip Code</h2>
              <input className="filter-zipcode" id="zipcode">
                
              </input>
            {/*<h2>I would like to be within...</h2>
              <select className="filter-dropdown" id="distance-dropdown">
                <option>Any distance</option>
                <option>1 Mile</option>
                <option>3 Miles</option>
                <option>5+ Miles</option>
              </select>*/}
            <h2>I am interested in...</h2>
              <select className="filter-dropdown" id="type">
                <option>Food Bank</option>
                <option>Donation</option>
                <option>Shelter</option>
              </select>
            <h2>I would like my volunteering to take place...</h2>
              <select className="filter-dropdown" id="place">
                <option>In-Person</option>
                <option>Virtual</option>
              </select>
            {/*<div className="rectangle" />
            <div className="rectangle-wrapper">
              <div className="rectangle-2" />
            </div>
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <div className="rectangle-5" />
            <div className="rectangle-6" />
            <div className="rectangle-7" />
            <div className="rectangle-8" />
            <div className="rectangle-9" />
            <div className="rectangle-10" />
            <div className="text-wrapper-5">1 mile</div>
            <div className="text-wrapper-6">Food Banks</div>
            <div className="text-wrapper-7">Donations</div>
            <div className="text-wrapper-8">Either</div>
            <div className="text-wrapper-9">Virtual</div>
            <div className="text-wrapper-10">And</div>
            <div className="text-wrapper-11">In person</div>
            <div className="text-wrapper-12">Shelters</div>
            <div className="text-wrapper-13">Other</div>
            <div className="text-wrapper-14">3 miles</div>
            <div className="text-wrapper-15">5+ miles</div>*/}
            
            {/*<div className="text-wrapper-17">Dates between...</div>
            <div className="overlap-2">
              <div className="text-wrapper-18">MM/DD/YYYY</div>
            </div>
            <div className="overlap-3">
              <div className="text-wrapper-19">MM/DD/YYYY</div>
            </div>*/}
            <div className="error">{errorMessage}</div>
            <div className="apply-filter-button-wrapper"> 
              <button className="apply-filter-button" onClick={() => handleFilterApply(setShowFilter, filterCallback)}>Apply</button>
              {/*<button className="apply-filter-button" onClick={() => handleFilterReset(setShowFilter)}>Reset</button>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
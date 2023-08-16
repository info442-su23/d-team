import React from "react";
import "../App.css";

export const MapPage = () => {
    return (
        <div className="mapPage">
            <div className="div">
                <div className="text-wrapper">About Us</div>
                <h1 className="h-1">Volunteer Map</h1>
                <p className="discover-volunteer">
                    Discover Volunteer Opportunities In Your Area On The Map Below. Sign In To Get Access To Signing Up For
                    Opportunities You’d Like To Attend.
                </p>
                <div className="overlap-group">
                    <img className="map-pin" alt="Map pin" src="imgs/map-pin.png" />
                    <img className="map-pin-1" alt="Map pin" src="imgs/map-pin-2.png" />
                    <img className="map-pin-2" alt="Map pin" src="imgs/map-pin-3.png" />
                    <img className="map-pin-3" alt="Map pin" src="imgs/map-pin-4.png" />
                    <div className="text-wrapper-2">Food Banks</div>
                    <div className="text-wrapper-3">Other</div>
                    <div className="text-wrapper-4">Donations</div>
                    <div className="text-wrapper-5">Shelters</div>
                    <p className="find-centers-that">Find Centers That Are In Need Of Food And Supply Donations.</p>
                    <p className="volunteer-your-time">
                        Volunteer Your Time At A Local Shelter And Help Distribute Food, Supplies, And More.
                    </p>
                    <p className="help-at-food-banks">Help At Food Banks By Providing, Cooking, And Handing Out Meals.</p>
                    <p className="discover-other">
                        Discover Other Volunteer Opportunities In Need Of Help For The Local Homeless Population.
                    </p>
                </div>
            </div>
        </div>
    );
};
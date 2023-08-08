import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {

    return (
        <div className="home">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">

                    <div className='intro-section'>
                        <img className="image" alt="Image" src="imgs/HomePageHeader.jpeg" />
                        <div className="element-people-in">
                            <h1>
                                <span className="bold-number">53,500</span>
                                <span className="span"> People in King County experienced homelessness in 2022...</span>
                            </h1>
                        </div>
                        <div className="washington-s">
                            <p className="washington-s">Washington’s Department Of Commerce, 2023</p>
                        </div>
                    </div>

                    <div className="mission-section">
                        <div className="title">Dignity’s Goal</div>
                        <p className="dignity-empowering">
                            <span className="text-wrapper-2">Dignity: Empowering Change in Seattle&#39;s Homelessness Crisis</span>
                            <span className="text-wrapper-3">
                                . With a staggering surge in the homeless population to 53,500 in 2022, up from 45,300 in 2019, our
                                mission is urgent. As{" "}
                            </span>
                            <span className="text-wrapper-2">
                                Washington has become the fourth highest state in the U.S with the largest homeless population
                            </span>
                            <span className="text-wrapper-3">
                                , Seattle demands our attention. To combat this growing issue, Dignity offers a platform that makes
                                volunteering easier and accessible to everyone. Join us in making a difference, as we work together to
                                address Seattle&#39;s homelessness problem and restore dignity to those in need.
                            </span>
                        </p>
                    </div>


                    <div className="volunteer-section">
                        <div className="text-wrapper-5">Volunteer</div>
                        <p className="check-out-volunteer">Check Out Volunteer Opportunities In Your Area On The Opportunity Map!</p>
                        <div className="explore-map"><Link to='/Map'>Explore Map!</Link></div>
                    </div>

                    <div className="about-section">
                        <div className="about-us">About Us</div>
                        <div className="card-container">
                            <div className="card">
                                <img className="card-img" alt="Sydney's Portrait" src="imgs/sydney.png" />
                                <div className="card-name">Sydney Morales</div>
                                <div className="card-title">Project Manager</div>
                            </div>
                            <div className="card">
                                <img className="card-img" alt="Elisabeth's Portrait" src="imgs/elisabeth.png" />
                                <div className="card-name">Elisabeth Helleberg</div>
                                <div className="card-title">Product Designer</div>
                            </div>
                            <div className="card">
                                <img className="card-img" alt="Steven's Portrait" src="imgs/steven.png" />
                                <div className="card-name">Steven Hu</div>
                                <div className="card-title">Developer</div>
                            </div>
                            <div className="card">
                                <img className="card-img" alt="Calvin's Portrait" src="imgs/calvin.png" />
                                <div className="card-name">Calvin Chan</div>
                                <div className="card-title">Developer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}
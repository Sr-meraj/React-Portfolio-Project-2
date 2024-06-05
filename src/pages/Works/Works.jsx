import React from 'react';
import { Link } from 'react-router-dom';
import BG1 from "../../assets/images/bg1.png";
import Icon from "../../assets/images/icon.svg";
import Project2 from "../../assets/images/project2.jpeg";
import Project3 from "../../assets/images/project3.jpeg";
import Project4 from "../../assets/images/project4.jpeg";
import Project5 from "../../assets/images/project5.jpeg";
import Project6 from "../../assets/images/project6.jpeg";
import Star2 from "../../assets/images/star-2.png";

const Works = () => {
    return (
        <>
            <section className="projects-area">
                <div className="container">
                    <h1 className="section-heading" data-aos="fade-up"><img src={Star2} alt="Star" /> All
                        Projects <img src={Star2} alt="Star" /></h1>
                    <div className="row">
                        <div className="col-md-4">
                            <div data-aos="zoom-in">
                                <div className="project-item shadow-box">
                                    <Link className="overlay-link"></Link>
                                    <img src={BG1} alt="BG" className="bg-img" />
                                    <div className="project-img">
                                        <img src={'https://i.ibb.co/94Rdw42/weather-application.jpg'} alt="weather application" className='card-img' />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="project-info">
                                            <p>WEATHER APPLICATION</p>
                                            <h1>Dynamic</h1>
                                        </div>
                                        <a href='https://weather-application-srm.netlify.app' className="project-btn">
                                            <img src={Icon} alt="Button" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div data-aos="zoom-in">
                                <div className="project-item shadow-box">
                                    <Link className="overlay-link"></Link>
                                    <img src={BG1} alt="BG" className="bg-img" />
                                    <div className="project-img">
                                        <img src={Project2} alt="Project" className='card-img' />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="project-info">
                                            <p>PHOTOGRAPHY</p>
                                            <h1>Diesel H1</h1>
                                        </div>
                                        <Link className="project-btn">
                                            <img src={Icon} alt="Button" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-8">
                            <h1 className="section-heading" data-aos="fade-up"><img src={Star2}
                                alt="Star" /> All Projects <img src={Star2} alt="Star" /></h1>

                            <div className="d-flex align-items-start gap-24">
                                <div data-aos="zoom-in" className="flex-1">
                                    <div className="project-item shadow-box">
                                        <Link className="overlay-link"></Link>
                                        <img src={BG1} alt="BG" className="bg-img" />
                                        <div className="project-img">
                                            <img src={Project3} alt="Project" className='card-img' />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="project-info">
                                                <p>mOBILE DESIGNING</p>
                                                <h1>Seven Studio</h1>
                                            </div>
                                            <Link className="project-btn">
                                                <img src={Icon} alt="Button" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="zoom-in" className="flex-1">
                                    <div className="project-item shadow-box">
                                        <Link className="overlay-link"></Link>
                                        <img src={BG1} alt="BG" className="bg-img" />
                                        <div className="project-img">
                                            <img src={Project4} alt="Project" className='card-img' />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="project-info">
                                                <p>Branding</p>
                                                <h1>Raven Studio</h1>
                                            </div>
                                            <Link className="project-btn">
                                                <img src={Icon} alt="Button" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex align-items-start gap-24">
                                <div data-aos="zoom-in" className="flex-1">
                                    <div className="project-item shadow-box">
                                        <Link className="overlay-link"></Link>
                                        <img src={BG1} alt="BG" className="bg-img" />
                                        <div className="project-img">
                                            <img src={Project5} alt="Project" className='card-img' />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="project-info">
                                                <p>mOBILE DESIGNING</p>
                                                <h1>Submarine</h1>
                                            </div>
                                            <Link className="project-btn">
                                                <img src={Icon} alt="Button" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="zoom-in" className="flex-1">
                                    <div className="project-item shadow-box">
                                        <Link className="overlay-link"></Link>
                                        <img src={BG1} alt="BG" className="bg-img" />
                                        <div className="project-img">
                                            <img src={Project6} alt="Project" className='card-img' />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="project-info">
                                                <p>wEB DESIGNING</p>
                                                <h1>Hydra Merc</h1>
                                            </div>
                                            <Link className="project-btn">
                                                <img src={Icon} alt="Button" />
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Works;
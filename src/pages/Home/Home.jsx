import React from 'react';
import { Container } from 'react-bootstrap';
import { BsCamera } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { IoIosColorFilter } from "react-icons/io";
import { PiPencilCircle } from "react-icons/pi";
import { Link } from 'react-router-dom';
import BG1 from '../../assets/images/bg1.png';
import Gfonts from '../../assets/images/gfonts.png';
import Icon from '../../assets/images/icon.svg';
import Icon2 from '../../assets/images/icon2.png';
import WorkImg from '../../assets/images/my-works.png';
import Sign from '../../assets/images/sign.png';
import Me from '../../assets/images/srmeraj.webp';
import Star1 from '../../assets/images/star1.svg';
import Credential from '../../components/Credential/Credential';
import LetsWork from '../../components/LetsWork/LetsWork';
import Profile from '../../components/Profile/Profile';

const Home = () => {
    return (
        <>
            <section className="about-area">
                <Container>
                    <div className="row">
                        <div className="col-md-6" data-aos="zoom-in">
                            <div className="about-me-box shadow-box">
                                <Link className="overlay-link" to="/about"></Link>
                                <img src={BG1} alt="BG" className="bg-img" />
                                <div className="img-box">
                                    <picture>
                                        <source
                                            srcSet={Me}
                                            loading="lazy"
                                            type="image/webp"
                                            alt="srmeraj"
                                        />

                                        <source
                                            srcSet={Me}
                                            loading="lazy"
                                            type="image/jpg"
                                            alt="srmeraj"
                                        />

                                        <img
                                            src={Me}
                                            loading="lazy"
                                            type="image/jpg"
                                            alt="srmeraj" />

                                    </picture>



                                </div>
                                <div className="infos">
                                    <h4>A WEB DEVELOPER</h4>
                                    <h1>Siyamur Rahman.</h1>
                                    <p>I am a Full Stack Developer based in Bangladesh.</p>
                                    <Link to="#" className="about-btn">
                                        <img src={Icon} alt="Button" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="about-credentials-wrap">
                                <div data-aos="zoom-in">
                                    <div className="banner shadow-box">
                                        <div className="marquee">
                                            <div>
                                                <span>
                                                    LATEST WORK AND<b> FEATURED</b>
                                                    <img src={Star1} alt="Star" />
                                                    LATEST WORK AND<b> FEATURED</b>
                                                    <img src={Star1} alt="Star" />
                                                    LATEST WORK AND<b> FEATURED</b>
                                                    <img src={Star1} alt="Star" />
                                                    LATEST WORK AND<b> FEATURED</b>
                                                    <img src={Star1} alt="Star" />
                                                    LATEST WORK AND<b> FEATURED</b>
                                                    <img src={Star1} alt="Star" />
                                                    LATEST WORK AND<b> FEATURED</b>
                                                    <img src={Star1} alt="Star" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="gx-row d-flex gap-24">
                                    <div data-aos="zoom-in">
                                        <Credential BG1={BG1} Sign={Sign} Icon={Icon} />
                                    </div>

                                    <div data-aos="zoom-in">
                                        <div className="about-project-box info-box shadow-box h-full">
                                            <Link className="overlay-link" to="/projects"></Link>
                                            <img src={BG1} alt="BG" className="bg-img" />
                                            <img src={WorkImg} alt="My Works" />
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="infos">
                                                    <h4>SHOWCASE</h4>
                                                    <h1>Projects</h1>
                                                </div>

                                                <Link to="#" className="about-btn">
                                                    <img src={Icon} alt="Button" />
                                                </Link>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-24">
                        <div className="col-md-12">
                            <div className="blog-service-profile-wrap d-flex gap-24">
                                <div data-aos="zoom-in">
                                    <div className="about-blog-box info-box shadow-box h-full">
                                        <Link to="/blog" className="overlay-link"></Link>
                                        <img src={BG1} alt="BG" className="bg-img" />
                                        <img src={Gfonts} alt="GFonts" />
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="infos">
                                                <h4>Blog</h4>
                                                <h1>GFonts</h1>
                                            </div>

                                            <Link to="/blog" className="about-btn">
                                                <img src={Icon} alt="Button" />
                                            </Link>

                                        </div>
                                    </div>
                                </div>

                                <div data-aos="zoom-in" className="flex-1">
                                    <div className="about-services-box info-box shadow-box h-full">
                                        <Link to="/service" className="overlay-link"></Link>
                                        <img src={BG1} alt="BG" className="bg-img" />
                                        <div className="icon-boxes">
                                            {/* <i className="iconoir-camera"></i>
                                            <i className="iconoir-design-pencil"></i>
                                            <i className="iconoir-color-filter"></i>
                                            <i className="iconoir-dev-mode-laptop"></i> */}
                                            <BsCamera />
                                            <PiPencilCircle />
                                            <IoIosColorFilter />
                                            <FaLaptopCode />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="infos">
                                                <h4>specialization</h4>
                                                <h1>Services Offering</h1>
                                            </div>

                                            <Link to="/service" className="about-btn">
                                                <img src={Icon} alt="Button" />
                                            </Link>

                                        </div>
                                    </div>
                                </div>

                                <div data-aos="zoom-in">
                                    <Profile BG1={BG1} Icon={Icon} />
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="row mt-24">
                        <div className="col-md-6" data-aos="zoom-in">

                            <div className="about-client-box info-box shadow-box">
                                <img src={BG1} alt="BG" className="bg-img" />
                                <div className="clients d-flex align-items-start gap-24 justify-content-center">
                                    <div className="client-item">
                                        <h1>03+</h1>
                                        <p>Years <br />Experience</p>
                                    </div>

                                    <div className="client-item">
                                        <h1>45+</h1>
                                        <p>CLIENTS <br />WORLDWIDE</p>
                                    </div>

                                    <div className="client-item">
                                        <h1>90+</h1>
                                        <p>Total <br />Projects</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6" data-aos="zoom-in">

                            <LetsWork BG1={BG1} Icon={Icon} Icon2={Icon2} />

                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Home;
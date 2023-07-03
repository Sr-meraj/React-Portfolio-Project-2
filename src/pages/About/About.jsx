import React from 'react';
import Icon from '../../assets/images/icon.svg'
import BG1 from '../../assets/images/bg1.png'
import Icon2 from '../../assets/images/icon2.png'
import Me2 from '../../assets/images/siyamurrahmanmayraj.webp'
import Star2 from '../../assets/images/star-2.png'
import Sign from '../../assets/images/sign.png'
import Credential from '../../components/Credential/Credential';
import LetsWork from '../../components/LetsWork/LetsWork';
import Profile from '../../components/Profile/Profile';

const About = () => {
    return (
        <>
            {/* <!-- About --> */}
            <section className="about-area">
                <div className="container">
                    <div className="d-flex about-me-wrap align-items-start gap-24">
                        <div data-aos="zoom-in">
                            <div className="about-image-box shadow-box">
                                <img src={BG1} alt="BG" className="bg-img" />
                                <div className="image-inner">

                                    <picture>

                                        <source
                                            srcSet={Me2}
                                            loading="lazy"
                                            type="image/webp"
                                            alt="siyamurrahmanmayraj"
                                        />

                                        <source
                                            srcSet={Me2}
                                            loading="lazy"
                                            type="image/jpg"
                                            alt="siyamurrahmanmayraj"
                                        />

                                        <img
                                            src={Me2}
                                            loading="lazy"
                                            type="image/jpg"
                                            alt="siyamurrahmanmayraj" />

                                    </picture>

                                </div>
                            </div>
                        </div>

                        <div className="about-details" data-aos="zoom-in">
                            <h1 className="section-heading" data-aos="fade-up"><img src={Star2}
                                alt="Star" /> Self-summary <img src={Star2} alt="Star" /></h1>
                            <div className="about-details-inner shadow-box">
                                <img src={Icon2} alt="Star" />
                                <h1>Siyamur Rahman Meraj</h1>
                                <p>I am a San francisco-based product designer with a focus on web design, illustration,
                                    a visual development. I have a diverse range of experience having worked across
                                    various fields and industries.</p>
                            </div>

                        </div>
                    </div>

                    <div className="row mt-24">
                        <div className="col-md-6 mb-4" data-aos="zoom-in">
                            <div className="about-edc-exp about-experience shadow-box h-full">
                                <img src={BG1} alt="BG" className="bg-img" />
                                <h3>EXPERIENCE</h3>

                                <ul>
                                    <li>
                                        <p className="date">2020 - 2022</p>
                                        <h2>WordPress Developer</h2>
                                        <p className="type">Sorobindu</p>
                                    </li>
                                    <li>
                                        <p className="date">2022 - 2023</p>
                                        <h2>Front-End Developer</h2>
                                        <p className="type">Programming Hero</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4" data-aos="zoom-in">
                            <div className="about-edc-exp about-education shadow-box h-full">
                                <img src={BG1} alt="BG" className="bg-img" />
                                <h3>EDUCATION</h3>

                                <ul>
                                    <li>
                                        <p className="date">2017 - 2021</p>
                                        <h2>Diploma in Computer Science Engineering (CSE)</h2>
                                        <p className="type">
                                            University of Institute of Science & Technology (IST)
                                        </p>
                                    </li>
                                    <li>
                                        <p className="date">2021 - 2025</p>
                                        <h2>BSC in Computer Science Engineering (CSE)</h2>
                                        <p className="type">
                                            University of Nourth South University
                                        </p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-20">
                        <div className="col-md-12">
                            <div className="d-flex profile-contact-credentials-wrap gap-24">

                                <div data-aos="zoom-in">
                                    <Profile BG1={BG1} Icon={Icon} />
                                </div>

                                <div data-aos="zoom-in" className="flex-1">
                                    <LetsWork BG1={BG1} Icon={Icon} Icon2={Icon2} />
                                </div>

                                <div data-aos="zoom-in">
                                    <Credential BG1={BG1} Sign={Sign} Icon={Icon} />
                                </div>

                            </div>
                            {/* <div className="blog-service-profile-wrap d-flex gap-24">
                                <div data-aos="zoom-in">
                                    <Profile BG1={BG1} Icon={Icon} />
                                </div>

                                <div data-aos="zoom-in" className="flex-1">
                                    <LetsWork BG1={BG1} Icon={Icon} Icon2={Icon2} />
                                </div>

                                <div data-aos="zoom-in">
                                    <Credential BG1={BG1} Sign={Sign} Icon={Icon} />
                                </div>

                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
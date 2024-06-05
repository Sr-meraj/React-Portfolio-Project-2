import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsBehance, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BG1 from '../../assets/images/bg1.png';
import Me3 from '../../assets/images/siamurrahmanmeraj.webp';
import "./credentials.css";

const Credentials = () => {
    return (
        <>
            {/* <!-- Credentials --> */}
            <section className="credential-area">
                <Container>
                    <Row className="gap-3">
                        <Col lg={4} md={5} className="credential-sidebar-wrap" data-aos="zoom-in">
                            <div className="credential-sidebar text-center">
                                <div className="shadow-box">
                                    <img src={BG1} alt="BG" className="bg-img" />
                                    <div className="img-box">
                                        <picture>

                                            <source
                                                srcSet={Me3}
                                                loading="lazy"
                                                type="image/webp"
                                                alt="siamurrahmanmeraj"
                                            />

                                            <source
                                                srcSet={Me3}
                                                loading="lazy"
                                                type="image/jpg"
                                                alt="siamurrahmanmeraj"
                                            />

                                            <img
                                                src={Me3}
                                                loading="lazy"
                                                type="image/jpg"
                                                alt="siamurrahmanmeraj" />

                                        </picture>
                                    </div>
                                    <h2>Siyamur Rahman Meraj</h2>
                                    <p>@srmeraj1</p>

                                    <ul className="social-links d-flex justify-content-center">
                                        <li><a href="#"><BsBehance /></a></li>
                                        <li><a href="https://instagram.com/srmeraj1"><BsInstagram /></a></li>
                                        <li><a target={'_blank'} href="https://facebook.com/srmeraj1"><FaFacebookF /></a></li>
                                        <li><a target={'_blank'} href="https://www.linkedin.com/in/devmeraj"><FaLinkedinIn /></a></li>
                                    </ul>

                                    <Link to="/contact" className="theme-btn btn-primary btn">Contact Me</Link>
                                </div>
                            </div>
                        </Col>

                        <Col lg={8} md={7} className="credential-content flex-1">
                            <div className="credential-about" data-aos="zoom-in">
                                <h2>About Me</h2>
                                <p>
                                    I am a full-stack developer based in Dhaka, Bangladesh, dedicated to crafting exceptional digital experiences. My work transcends borders as I collaborate with clients and projects globally.
                                </p>

                                <p>
                                    With a robust foundation in web design, illustration, and visual development, I bring a unique and creative perspective to each project. My diverse experience across various fields and industries enables me to approach challenges with innovation and adaptability.
                                </p>

                                <p>
                                    I specialize in both front-end and back-end development, bringing ideas to life through code and design. My commitment to excellence drives me to continuously learn and stay current with the latest technologies and industry trends.
                                </p>

                                <p>
                                    From building responsive websites and creating intuitive user interfaces to developing robust backend systems, I am passionate about transforming ideas into functional and visually appealing solutions.
                                </p>
                                <p>
                                    Let's collaborate to bring your digital vision to life.
                                </p>

                            </div>

                            <div className="credential-edc-exp credential-experience">
                                <h2 data-aos="fade-up">Experience</h2>
                                <div className="credential-edc-exp-item" data-aos="zoom-in">
                                    <h4>2022 - Present</h4>
                                    <h3>Freelance Web Developer</h3>
                                    <h5>Fiverr</h5>
                                    <ol className='list'>
                                        <li>
                                            - Delivered over 100 projects with a focus on WordPress customization, achieving         high client satisfaction.
                                        </li>
                                        <li>
                                            - Developed custom themes and plugins, optimizing websites for performance and SEO.
                                        </li>
                                        <li>
                                            - Collaborated with clients to understand requirements and deliver tailored solutions.
                                        </li>
                                    </ol>
                                </div>
                                <div className="credential-edc-exp-item" data-aos="zoom-in">
                                    <h4>2023-2024</h4>
                                    <h3>Web Developer</h3>
                                    <h5>Local Market Collaborations</h5>
                                    <ol className='list'>
                                        <li>
                                            - Worked on various local projects, from small business websites to complex web applications.
                                        </li>
                                        <li>
                                            - Utilized ReactJS and NodeJS for full-stack development, enhancing user experience and functionality.
                                        </li>
                                        <li>
                                            - Maintained and upgraded existing websites, ensuring they remain up-to-date with the latest technologies and trends.
                                        </li>
                                        <li>
                                            - Contributed to WordPress projects with Big Brothers, improving site performance and adding new features.
                                        </li>
                                    </ol>
                                </div>
                            </div>

                            <div className="credential-edc-exp credential-education">
                                <h2 data-aos="fade-up">Education</h2>
                                <div className="credential-edc-exp-item" data-aos="zoom-in">
                                    <h4>2019</h4>
                                    <h3>Secondary school certificate (SSC) </h3>
                                    <h5>Shalgon Kalishima School & Collage</h5>
                                </div>
                                <div className="credential-edc-exp-item" data-aos="zoom-in">
                                    <h4>2019 - 2020</h4>
                                    <h3>Diploma in Computer Science Engineering (CSE)</h3>
                                    <h5>Institute of Science and Technology (IST)</h5>
                                </div>
                            </div>

                            <div className="skills-wrap">
                                <h2 data-aos="fade-up">Skills</h2>
                                <div className="d-grid skill-items gap-24 flex-wrap">
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">85%</span>
                                        <h3 className="name">JavaScript</h3>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">75%</span>
                                        <h3 className="name">Figma</h3>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">90%</span>
                                        <h3 className="name">WordPress</h3>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">82%</span>
                                        <h3 className="name">React</h3>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">70%+</span>
                                        <h3 className="name">PHP</h3>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">70%+</span>
                                        <h3 className="name">Laravel</h3>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">70%+</span>
                                        <h3 className="name">Github</h3>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">70%+</span>
                                        <h3 className="name">MongoDB</h3>
                                    </div>

                                </div>
                            </div>

                            <div className="skills-wrap awards-wrap">
                                <h2 data-aos="fade-up">Awards</h2>
                                <div className="d-grid skill-items gap-24 flex-wrap">
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">12 april 2022</span>
                                        <h3 className="name">Wordpress Developer - basic to advance</h3>
                                        <p>Sorobindo</p>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">20 June 2023</span>
                                        <h3 className="name">MERN Stack</h3>
                                        <p>Programming Hero</p>
                                    </div>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Credentials;
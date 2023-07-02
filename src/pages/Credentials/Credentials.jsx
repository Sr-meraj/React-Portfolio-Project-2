import React from 'react';
import "./credentials.css";
import { Col, Container, Row } from 'react-bootstrap';
import { BsBehance, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import BG1 from '../../assets/images/bg1.png'
import Me3 from '../../assets/images/srm.jpg'

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
                                        <img src={Me3} alt="About Me" />
                                    </div>
                                    <h2>Siyamur Rahman Meraj</h2>
                                    <p>@siyamurrahmanmeraj</p>

                                    <ul className="social-links d-flex justify-content-center">
                                        <li><Link to="#"><BsBehance /></Link></li>
                                        <li><Link to="#"><FiTwitter /></Link></li>
                                        <li><Link to="#"><BsInstagram /></Link></li>
                                        <li><Link to="#"><FaFacebookF /></Link></li>
                                    </ul>

                                    <Link to="/contact" className="theme-btn btn-primary btn">Contact Me</Link>
                                </div>
                            </div>
                        </Col>

                        <Col lg={8} md={7} className="credential-content flex-1">
                            <div className="credential-about" data-aos="zoom-in">
                                <h2>About Me</h2>
                                <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus
                                    dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est
                                    ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra
                                    orci sagittis eu volutpat odio facilisis mauris sit.</p>
                                <p>Scelerisque fermentum duisi faucibus in ornare quam sisd sit amet luctussd fav
                                    venenatis, lectus magna fringilla zac urna, porttitor rhoncus dolor purus non enim
                                    praesent cuz elementum sahas facilisis leot.</p>
                            </div>

                            <div className="credential-edc-exp credential-experience">
                                <h2 data-aos="fade-up">Experience</h2>
                                <div className="credential-edc-exp-item" data-aos="zoom-in">
                                    <h4>2007 - 2017</h4>
                                    <h3>Framer Designer & Developer</h3>
                                    <h5>Bluebase Designs</h5>
                                    <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor
                                        rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel
                                        fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim
                                        lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                                </div>
                                <div className="credential-edc-exp-item" data-aos="zoom-in">
                                    <h4>2017 - 2023</h4>
                                    <h3>Front-End Developer</h3>
                                    <h5>Larsen & Toubro</h5>
                                    <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor
                                        rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel
                                        fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim
                                        lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                                </div>
                            </div>

                            <div className="credential-edc-exp credential-education">
                                <h2 data-aos="fade-up">Education</h2>
                                <div className="credential-edc-exp-item" data-aos="zoom-in">
                                    <h4>2004 - 2007</h4>
                                    <h3>Bachelor Degree in Psychology</h3>
                                    <h5>University of California</h5>
                                    <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor
                                        rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel
                                        fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim
                                        lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                                </div>
                                <div className="credential-edc-exp-item" data-aos="zoom-in">
                                    <h4>2007 - 2009</h4>
                                    <h3>Master Degree in Designing</h3>
                                    <h5>University of Texas</h5>
                                    <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor
                                        rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel
                                        fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim
                                        lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                                </div>
                            </div>

                            <div className="skills-wrap">
                                <h2 data-aos="fade-up">Skills</h2>
                                <div className="d-grid skill-items gap-24 flex-wrap">
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">85%</span>
                                        <h3 className="name">JavaScript</h3>
                                        <p>Non enim praesent</p>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">50%+</span>
                                        <h3 className="name">Python</h3>
                                        <p>Non enim praesent</p>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">72%</span>
                                        <h3 className="name">Figma</h3>
                                        <p>Non enim praesent</p>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">90%</span>
                                        <h3 className="name">WordPress</h3>
                                        <p>Non enim praesent</p>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">81%</span>
                                        <h3 className="name">React</h3>
                                        <p>Non enim praesent</p>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">70%+</span>
                                        <h3 className="name">PHP</h3>
                                        <p>Non enim praesent</p>
                                    </div>

                                </div>
                            </div>

                            <div className="skills-wrap awards-wrap">
                                <h2 data-aos="fade-up">Awards</h2>
                                <div className="d-grid skill-items gap-24 flex-wrap">
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">14 May 2020</span>
                                        <h3 className="name">Bluebase</h3>
                                        <p>Non enim praesent</p>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">26 June 2018</span>
                                        <h3 className="name">Demble</h3>
                                        <p>Non enim praesent</p>
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
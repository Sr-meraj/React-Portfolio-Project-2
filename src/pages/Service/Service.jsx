import React from 'react';
import './service.css'
import Credential from '../../components/Credential/Credential';
import LetsWork from '../../components/LetsWork/LetsWork';
import Profile from '../../components/Profile/Profile';
import Icon from '../../assets/images/icon.svg'
import BG1 from '../../assets/images/bg1.png'
import Icon2 from '../../assets/images/icon2.png'
import Star2 from '../../assets/images/star-2.png'
import Sign from '../../assets/images/sign.png'
import { Col, Container, Row } from 'react-bootstrap';
import { BsCamera } from "react-icons/bs";
import { PiPencilCircle } from "react-icons/pi";
import { IoIosColorFilter } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";

const Service = () => {
    return (
        <div>
            {/* <!-- Service --> */}
            <section className="service-area">
                <Container>
                    <h1 className="section-heading" data-aos="fade-up"><img src={Star2} alt="Star" /> My
                        Offerings <img src={Star2} alt="Star" /></h1>

                    <Row>

                        {/* <!-- Sidebar --> */}
                        <Col md={5} lg={4} style={{ "margin": '.5rem 0' }}>
                            <div className="service-sidebar" data-aos="fade-right">
                                <div className="service-sidebar-inner shadow-box">
                                    <ul>
                                        <li>
                                            <BsCamera className='icon' />
                                            PHOTOGRAPHY
                                        </li>
                                        <li>
                                            <PiPencilCircle className='icon' />
                                            WEB DESIGNING
                                        </li>
                                        <li>
                                            <IoIosColorFilter className='icon' />
                                            BRANDING
                                        </li>
                                        <li>
                                            <FaLaptopCode className='icon' />
                                            DEVELOPMENT
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>

                        {/* <!-- Content --> */}
                        <Col md={7} lg={8} style={{ "margin": '.5rem 0' }}>
                            <h1 className="section-heading" data-aos="fade-up"><img src={Star2}
                                alt="Star" /> My Offerings <img src={Star2} alt="Star" /></h1>

                            <div className="service-content-wrap" data-aos="zoom-in">
                                <div className="service-content-inner shadow-box">
                                    <div className="service-items">
                                        <div className="service-item">
                                            <h3>Photography</h3>
                                            <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna,
                                                porttitor asna rhoncus dolor purus non enim aberitin praesent in
                                                elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                                        </div>
                                        <div className="service-item">
                                            <h3>Web Designing</h3>
                                            <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna,
                                                porttitor asna rhoncus dolor purus non enim aberitin praesent in
                                                elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                                        </div>
                                        <div className="service-item">
                                            <h3>Branding</h3>
                                            <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna,
                                                porttitor asna rhoncus dolor purus non enim aberitin praesent in
                                                elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                                        </div>
                                        <div className="service-item">
                                            <h3>Development</h3>
                                            <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna,
                                                porttitor asna rhoncus dolor purus non enim aberitin praesent in
                                                elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>


                    <Row className="mt-24">
                        <Col md={12}>
                            <div className="d-flex profile-contact-credentials-wrap gap-24">

                                <div data-aos="zoom-in">
                                    <Profile BG1={BG1} Icon={Icon} />
                                </div>

                                <div data-aos="zoom-in" className="flex-1">
                                    <LetsWork BG1={BG1} Icon={Icon} Icon2={Icon2} />
                                </div>

                                <div data-aos="zoom-in" className="h-full">
                                    <Credential BG1={BG1} Icon={Icon} Sign={Sign} />
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Service;
import React from 'react';
import './contact.css';
import BG1 from '../../assets/images/bg1.png'
import Icon3 from '../../assets/images/icon3.png'
import { BsBehance, BsInstagram, BsTelephone } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { FiMapPin, FiTwitter } from 'react-icons/fi'
const Contact = () => {
    return (
        <>
            {/* <!-- Contact --> */}
            <section className="contact-area">
                <div className="container">
                    <div className="gx-row d-flex justify-content-between gap-24">
                        <div className="contact-infos">
                            <h3 data-aos="fade-up">Contact Info</h3>
                            <ul className="contact-details">
                                <li className="d-flex align-items-center" data-aos="zoom-in">
                                    <div className="icon-box shadow-box">
                                        {/* <i className="iconoir-mail"></i> */}
                                        <HiOutlineMail />
                                    </div>
                                    <div className="right">
                                        <span>MAIL us</span>
                                        <h4>srmeraj9@gmail.com</h4>
                                        <h4>siamurrahmanmeraj@gmail.com</h4>
                                    </div>
                                </li>

                                <li className="d-flex align-items-center" data-aos="zoom-in">
                                    <div className="icon-box shadow-box">
                                        {/* <i className="iconoir-phone"></i> */}
                                        <BsTelephone />
                                    </div>
                                    <div className="right">
                                        <span>Contact Us</span>
                                        <h4>+880-17504-35306</h4>
                                        <h4>+880-19806-18615</h4>
                                    </div>
                                </li>

                                <li className="d-flex align-items-center" data-aos="zoom-in">
                                    <div className="icon-box shadow-box">
                                        {/* <i className="iconoir-pin-alt"></i> */}
                                        <FiMapPin />
                                    </div>
                                    <div className="right">
                                        <span>Location</span>
                                        <h4>22 Baker Street, Texas <br />United States <br />W1U 3BW</h4>
                                    </div>
                                </li>
                            </ul>

                            <h3 data-aos="fade-up">Social Info</h3>
                            <ul className="social-links d-flex align-center" data-aos="zoom-in">
                                <li><a className="shadow-box" href=""><BsBehance /></a></li>
                                <li><a className="shadow-box" href=""><FiTwitter /></a></li>
                                <li><a className="shadow-box" href=""> <BsInstagram /></a></li>
                            </ul>
                        </div>

                        <div data-aos="zoom-in" className="contact-form">
                            <div className="shadow-box">
                                <img src={BG1} alt="BG" className="bg-img" />
                                <img src={Icon3} alt="Icon" />
                                <h1>Let’s work <span>together.</span></h1>
                                <form method="POST" action="mailer.php">
                                    <div className="alert alert-success messenger-box-contact__msg" style={{ "display": 'none' }}
                                        role="alert">
                                        Your message was sent successfully.
                                    </div>
                                    <div className="input-group">
                                        <input type="text" name="full-name" id="full-name" placeholder="Name *" />
                                    </div>
                                    <div className="input-group">
                                        <input type="email" name="email" id="email" placeholder="Email *" />
                                    </div>
                                    <div className="input-group">
                                        <input type="text" name="subject" id="subject" placeholder="Your Subject *" />
                                    </div>
                                    <div className="input-group">
                                        <textarea name="message" id="message" placeholder="Your Message *"></textarea>
                                    </div>
                                    <div className="input-group">
                                        <button className="theme-btn submit-btn" name="submit" type="submit">Send
                                            Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
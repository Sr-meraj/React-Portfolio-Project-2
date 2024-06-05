import emailjs from 'emailjs-com';
import React, { useEffect, useRef, useState } from 'react';
import './contact.css';

import { BsInstagram, BsTelephone } from 'react-icons/bs';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import BG1 from '../../assets/images/bg1.png';
import Icon3 from '../../assets/images/icon3.png';


const Contact = () => {
    const form = useRef()
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true); // Start the loading animation
        setMessage('Sending...'); // Update the message

        emailjs.sendForm('service_awv99qs', 'template_w5j2r3y', form.current, 'qdjYfo7MNLWyD3udv')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setMessage('Your message was sent successfully.');
                setIsSuccess(true)
            })
            .catch((error) => {
                console.log('FAILED...', error);
                setMessage('Sorry, there was an error while sending your message.');
                setIsSuccess(false)
            })
            .finally(() => {
                setIsLoading(false); // Stop the loading animation
            });

        e.target.reset();
    };

    useEffect(() => {
        let timer;
        if (message) {
            timer = setTimeout(() => {
                setMessage('');
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [message]);

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
                                        <span>Mail us</span>
                                        <h4><a href="mailto:srmeraj9@gmail.com">srmeraj9@gmail.com</a></h4>
                                        <h4><a href="mailto:siamurrahmanmeraj@gmail.com">siamurrahmanmeraj@gmail.com</a></h4>
                                    </div>
                                </li>

                                <li className="d-flex align-items-center" data-aos="zoom-in">
                                    <div className="icon-box shadow-box">
                                        {/* <i className="iconoir-phone"></i> */}
                                        <BsTelephone />
                                    </div>
                                    <div className="right">
                                        <span>Contact Us</span>
                                        <h4><a href="tel:+8801600053406">+880-16000-53406</a></h4>
                                        <h4><a href="tel:+8801302023206">+880-13020-23206</a></h4>
                                    </div>
                                </li>

                                <li className="d-flex align-items-center" data-aos="zoom-in">
                                    <div className="icon-box shadow-box">
                                        {/* <i className="iconoir-pin-alt"></i> */}
                                        <FiMapPin />
                                    </div>
                                    <div className="right">
                                        <span>Location</span>
                                        <h4>Brahmanbaria Sadar<br />Brahmanbaria <br />Bangladesh</h4>
                                    </div>
                                </li>
                            </ul>

                            <h3 data-aos="fade-up">Social Info</h3>
                            <ul className="social-links d-flex align-center" data-aos="zoom-in">
                                <li><a className="shadow-box" href="https://x.com/Srm_siyam"><FaTwitter /></a></li>
                                <li><a className="shadow-box" href="https://facebook.com/srmeraj1"><FaFacebookF /></a></li>
                                <li><a className="shadow-box" href="https://instagram.com/srmeraj1"> <BsInstagram /></a></li>
                            </ul>
                        </div>

                        <div data-aos="zoom-in" className="contact-form">
                            <div className="shadow-box">
                                <img src={BG1} alt="BG" className="bg-img" />
                                <img src={Icon3} alt="Icon" />
                                <h1>Let’s work <span>together.</span></h1>
                                <form ref={form} onSubmit={sendEmail}>
                                    <div
                                        className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'} messenger-box-contact__msg`}
                                        style={{ display: message ? 'block' : 'none' }}
                                    >
                                        {message}
                                    </div>

                                    <div className="input-group">
                                        <input type="text" name="full-name" id="full-name" placeholder="Name *" required />
                                    </div>
                                    <div className="input-group">
                                        <input type="email" name="email" id="email" placeholder="Email *" required />
                                    </div>
                                    <div className="input-group">
                                        <input type="text" name="subject" id="subject" placeholder="Your Subject *" required />
                                    </div>
                                    <div className="input-group">
                                        <textarea name="message" id="message" placeholder="Your Message *" required></textarea>
                                    </div>
                                    <div className="input-group">
                                        <button className={`theme-btn submit-btn ${isLoading ? 'loading' : ''}`} name="submit" type="submit" disabled={isLoading}>
                                            {isLoading ? (
                                                <>
                                                    Sending...
                                                    <span className="spinner"></span>
                                                </>
                                            ) : (
                                                'Send Message'
                                            )}
                                        </button>
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
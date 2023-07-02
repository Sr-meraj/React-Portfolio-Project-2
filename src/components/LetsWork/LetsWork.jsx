import React from 'react';
import { Link } from 'react-router-dom';

const LetsWork = ({ BG1, Icon, Icon2 }) => {
    return (
        <>
            <div className="about-contact-box info-box shadow-box h-full">
                <Link className="overlay-link" to="/contact"></Link>
                <img src={BG1} alt="BG" className="bg-img" />
                <img src={Icon2} alt="Icon" className="star-icon" />
                <h1>Let's <br />work <span>together.</span></h1>
                <Link to="#" className="about-btn">
                    <img src={Icon} alt="Button" />
                </Link>
            </div>
        </>
    );
};

export default LetsWork;
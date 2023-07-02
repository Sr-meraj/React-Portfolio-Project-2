import React from 'react';
import { Link } from 'react-router-dom';

const Credential = ({ BG1, Sign, Icon }) => {
    return (
        <>
            <div className="about-crenditials-box info-box shadow-box h-full">
                <Link className="overlay-link" to="/credentials"></Link>
                <img src={BG1} alt="BG" className="bg-img" />
                <img src={Sign} alt="Sign" className='Sign' style={{ 'filter': 'invert(10)', 'width': '200px' }} />
                <div className="d-flex align-items-center justify-content-between">
                    <div className="infos">
                        <h4>more about me</h4>
                        <h1>Credentials</h1>
                    </div>

                    <Link to="/credentials" className="about-btn">
                        <img src={Icon} alt="Button" />
                    </Link>

                </div>
            </div>
        </>
    );
};

export default Credential;
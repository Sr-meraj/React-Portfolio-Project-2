import React from 'react';
import { Link } from 'react-router-dom';
import { BsBehance } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'

const Profile = ({ BG1, Icon }) => {
    return (
        <>
            <div className="about-profile-box info-box shadow-box h-full">
                <img src={BG1} alt="BG" className="bg-img" />
                <div className="inner-profile-icons shadow-box">
                    <Link to="#">
                        {/* <i className="iconoir-behance"></i> */}
                        <BsBehance />
                    </Link>
                    <Link to="#">
                        {/* <i className="iconoir-twitter"></i> */}
                        <FiTwitter />
                    </Link>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="infos">
                        <h4>Stay with me</h4>
                        <h1>Profiles</h1>
                    </div>

                    <Link to="/contact" className="about-btn">
                        <img src={Icon} alt="Button" />
                    </Link>

                </div>
            </div>
        </>
    );
};

export default Profile;
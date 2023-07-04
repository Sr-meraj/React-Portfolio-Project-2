import React, { useEffect } from 'react';
import './Preloader.css'; // Create a CSS file for Preloader styles

const Loading = () => {
    useEffect(() => {
        const preloader = document.createElement('div');
        preloader.id = 'preloader';
        preloader.className = 'preloader';
        preloader.innerHTML = '<div class="black_wall"></div><div class="loader"></div>';

        document.body.insertBefore(preloader, document.body.firstChild);

        window.onload = function () {
            document.getElementById('preloader').classList.add('off');
        };

        return () => {
            // Cleanup code to remove the preloader when the component unmounts
            document.body.removeChild(preloader);
        };
    }, []);

    return null; // Return null since the component doesn't render anything
};

export default Loading;

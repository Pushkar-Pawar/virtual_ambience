import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();

    const handleEscapeClick = () => {
        navigate('/your-space');
    };

    return (
        <div className="welcome-container">
            <p className='header'>i hate my cubicle</p>
            <button className="escape" onClick={handleEscapeClick}>
                Escape!
            </button>
        </div>
    );
};

export default Welcome;
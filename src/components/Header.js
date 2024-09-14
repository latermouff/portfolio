import React from 'react';

const Header = () => {
return (
    <header>
        <div className="social-links" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#1b89ff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', margin: '5px' }}>
            <a href="https://www.youtube.com/@latermo2641" target="_blank" rel="noopener noreferrer">
                <img src={require("../images/logo_youtube.png")} alt="YouTube" style={{ width: 'auto', height: '15px' }} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={require("../images/logo_linkedin.png")} alt="LinkedIn" style={{ width: 'auto', height: '15px' }} />
            </a>
            </div>
        </div>
    </header>
);
};

export default Header;
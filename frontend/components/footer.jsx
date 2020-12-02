import React from 'react';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-container">
                <h6>Inspired by OpenTable</h6>
                <div className="alvin-links-container">
                    <h6 className="my-name">Alvin Chong</h6>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/alvin-chong-4b88011a1/" target="_blank"><img className="links-logo" src={window.liURL} alt="linkedIn"/></a>
                    </div>
                    <div className="links">
                        <a href="https://github.com/alvinc90" target="_blank"><img className="links-logo" src={window.gitURL} alt="github"/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
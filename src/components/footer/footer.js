import React from 'react';
import './footer.css';
import longLogo from '../../data/img/09.BUILDlong.svg'
import {useBuildContext} from "../../store/languageThemeStore";
import {Link} from "react-router-dom";

export const Footer = () => {
    const {
        selectedLanguage,
        selectedTheme,
    } = useBuildContext();

    const handleScrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <>
            <footer className="App-footer" style={{
                backgroundColor: selectedTheme.primaryBackground,
                borderColor: selectedTheme.primaryLine
            }}>
                <img src={longLogo} alt={'logo'} className='logo-footer-img'/>
                <p style={{
                    color: selectedTheme.mainText,
                }}>{selectedLanguage.allRightsReserved}</p>
                <Link
                    className='privacy-policy-link'
                    to="/PrivacyPolicy"
                    onClick={handleScrollToTop}
                >
                    <h6>{selectedLanguage.privacyPolicy}</h6>
                </Link>
            </footer>
        </>
    )
}

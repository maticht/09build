import React from 'react';
import './simpleHeader.css';
import logo from '../../data/img/09BUILD.svg'
import {Link} from "react-router-dom";
import {useBuildContext} from "../../store/languageThemeStore";

export const SimpleHeader = () => {
    const {
        selectedLanguage,
        selectedTheme,
    } = useBuildContext();
    const handleScrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <>
            <header className="App-simple-header" style={{
                backgroundColor: selectedTheme.primaryBackground,
                borderColor: selectedTheme.primaryLine
            }}>
                <div className="simple-header-1450" style={{
                    backgroundColor: selectedTheme.primaryBackground,
                    borderColor: selectedTheme.primaryLine
                }}>
                    <Link className="right-logo" to={"/"} onClick={handleScrollToTop}>
                        <img src={logo} alt={'logo'} className='logo-img'/>
                    </Link>
                    <div>
                        <Link className='home-btn' to={"/"} onClick={handleScrollToTop}>
                            <p className='simple-contact-btn-text'>{selectedLanguage.home}</p>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

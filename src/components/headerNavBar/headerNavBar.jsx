import React, {useEffect, useState} from 'react';
import './headerNavBar.css';
import logo from '../../data/img/09BUILD.svg'
import moon from '../../data/img/moon.svg'
import sun from '../../data/img/sun.svg'
import arrow from '../../data/img/arrow.svg'
import burgerIco from '../../data/img/burgerIco.svg'
import close from '../../data/img/close.svg'
import {Link} from "react-router-dom";
import {useBuildContext} from "../../store/languageThemeStore";

export const HeaderNavBar = () => {
    const {
        selectedLanguage, setSelectedLanguage, selectedThemeName, selectedTheme, toggleTheme, languages
    } = useBuildContext();
    const [rotation, setRotation] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isRotating, setIsRotating] = useState(false);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const handleBurgerClick = () => {
        setIsBurgerOpen(!isBurgerOpen);
    };

    const handleChangeTheme = () => {
        setIsRotating(true);
        setTimeout(() => {
            setIsRotating(false);
            toggleTheme();
            const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};
            userInfo.selectedThemeName = selectedThemeName === 'dark' ? 'light' : 'dark';
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
        }, 300);
    };

    const toggleMenu = () => {
        setRotation(rotation + 180);
        setIsOpen(!isOpen);
    };

    const selectLanguage = (language) => {
        setSelectedLanguage(language);
        setIsOpen(false);
        setRotation(rotation + 180);
        const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};
        userInfo.selectedLanguageCode = language.code;
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        console.log('Updated userInfo:', JSON.parse(localStorage.getItem('userInfo')));
        window.location.reload();
    };

    const handleScrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (isOpen && !event.target.closest('.dropdown-menu-btn')) {
                setIsOpen(false);
                setRotation(rotation + 180);
            }
        };
        if (isOpen) {
            window.addEventListener('click', handleOutsideClick);
        } else {
            window.removeEventListener('click', handleOutsideClick);
        }
        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [isOpen, rotation]);

    return (<>
            <header className="App-header" style={{
                backgroundColor: selectedTheme.primaryBackground, borderColor: selectedTheme.primaryLine
            }}>
                <div className="App-header-1450" style={{
                    backgroundColor: selectedTheme.primaryBackground, borderColor: selectedTheme.primaryLine
                }}>
                    <div className="left-column">
                        <img src={logo} alt={'logo'} className='logo-img'/>
                    </div>
                    <div className='right-nav-column'>
                        <div className='nav-links' style={{
                            backgroundColor: selectedTheme.primaryBackground, borderColor: selectedTheme.primaryLine
                        }}>
                            <Link to={"/projects"} style={{
                                color: selectedTheme.mainText,
                            }} className='nav-link'>{selectedLanguage.projectsTitle}</Link>
                            <Link to={"/сareer"} style={{
                                color: selectedTheme.mainText,
                            }} className='nav-link'>{selectedLanguage.careerTitle}</Link>
                        </div>
                        <div onClick={handleChangeTheme} className={`theme-btn ${isRotating ? 'rotating' : ''}`}
                             style={{
                                 backgroundColor: selectedTheme.primaryBackground,
                                 borderColor: selectedTheme.primaryLine
                             }}>
                            <img
                                src={selectedThemeName !== 'dark' ? moon : sun}
                                alt="Toggle Theme"
                                className={isRotating ? 'rotating' : ''}
                            />
                        </div>
                        <div className='dropdown-menu-block'>
                            <div className='dropdown-menu-btn' onClick={toggleMenu}>
                                <div className='menu-btn-content'>
                                    <p style={{
                                        color: selectedTheme.mainText,
                                    }}>{selectedLanguage.code}</p>
                                    <img
                                        className="arrow-img"
                                        style={{transform: `rotate(${rotation}deg)`}}
                                        src={arrow}
                                        alt="arrow"
                                    />
                                </div>
                            </div>
                            <div className={`dropdown-menu ${isOpen ? 'open' : ''}`} style={{
                                backgroundColor: selectedTheme.primaryBackground, borderColor: selectedTheme.primaryLine
                            }}>
                                <div>
                                    {languages
                                        .filter((language) => language.code !== selectedLanguage.code)
                                        .map((language) => (<p
                                                key={language.code}
                                                style={{
                                                    color: selectedTheme.mainText,
                                                }}
                                                className='language-name'
                                                onClick={() => selectLanguage(language)}>
                                                {language.name}
                                            </p>))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link className='link-btn' to={"/sayHello"}>
                        <p className='contact-nav-btn-text'>{selectedLanguage.contactTitle}</p>
                    </Link>
                    <div className='burger-modal' onClick={handleBurgerClick} style={{
                        backgroundColor: selectedTheme.primaryBackground, borderColor: selectedTheme.primaryLine
                    }}>
                        <img src={burgerIco}></img>
                    </div>
                    {isBurgerOpen && (<div className='burger-menu' style={{
                            backgroundColor: selectedTheme.primaryBackground, borderColor: selectedTheme.primaryLine
                        }}>
                            <div className='burger-menu-header' style={{
                                backgroundColor: selectedTheme.primaryBackground, borderColor: selectedTheme.primaryLine
                            }}>

                                <div className='burger-menu-header-half'>
                                    <Link className="right-logo" to={"/"} onClick={() => { handleScrollToTop(); handleBurgerClick(); }}>
                                        <img src={logo} alt={'logo'} className='logo-img'/>
                                    </Link>

                                </div>
                                <div className='burger-menu-header-half'>
                                    <div className='burger-modal' onClick={handleBurgerClick} style={{
                                        backgroundColor: selectedTheme.primaryBackground,
                                        borderColor: selectedTheme.primaryLine
                                    }}>
                                        <img src={close}></img>
                                    </div>
                                </div>
                            </div>
                            <div className='burger-menu-body'>
                                <div className='burger-mein-info'>
                                    <div className='dropdown-menu-block burger-dropdown-menu' style={{
                                        backgroundColor: selectedTheme.primaryBackground,
                                        borderColor: selectedTheme.primaryLine,
                                    }}>
                                        <div className='dropdown-menu-btn  burger-dropdown-btn'
                                             onClick={toggleMenu} style={{
                                            backgroundColor: selectedTheme.primaryBackground,
                                            borderColor: selectedTheme.primaryLine
                                        }}>
                                            <div className='menu-btn-content'>
                                                <p style={{
                                                    color: selectedTheme.mainText,
                                                }}>{selectedLanguage.code}</p>
                                                <img
                                                    className="arrow-img"
                                                    style={{transform: `rotate(${rotation}deg)`}}
                                                    src={arrow}
                                                    alt="arrow"
                                                />
                                            </div>
                                        </div>
                                        <div className={`dropdown-menu ${isOpen ? 'open' : ''} burger-dropdown`} style={{
                                            backgroundColor: selectedTheme.primaryBackground,
                                            borderColor: selectedTheme.primaryLine,
                                        }}>
                                            <div style={{
                                                backgroundColor: selectedTheme.primaryBackground,
                                                borderColor: selectedTheme.primaryLine,
                                            }}>
                                                {languages
                                                    .filter((language) => language.code !== selectedLanguage.code)
                                                    .map((language) => (<p
                                                        key={language.code}
                                                        style={{
                                                            color: selectedTheme.mainText,
                                                        }}
                                                        className='language-name burger-language-name'
                                                        onClick={() => selectLanguage(language)}>
                                                        {language.name}
                                                    </p>))}
                                            </div>
                                        </div>
                                    </div>
                                    {!isOpen && (
                                        <div className='burger-links' style={{
                                            backgroundColor: selectedTheme.primaryBackground,
                                            borderColor: selectedTheme.primaryLine
                                        }}>
                                            <div className='burger-link-block' style={{
                                                backgroundColor: selectedTheme.primaryBackground,
                                                borderColor: selectedTheme.primaryLine
                                            }}>
                                                <Link to={"/projects"} style={{
                                                    color: selectedTheme.mainText,
                                                }} className='nav-link'>{selectedLanguage.projectsTitle}</Link>
                                            </div>
                                            <div className='burger-link-block' style={{
                                                backgroundColor: selectedTheme.primaryBackground,
                                                borderColor: selectedTheme.primaryLine
                                            }}>
                                                <Link to={"/сareer"} style={{
                                                    color: selectedTheme.mainText,
                                                }} className='nav-link'>{selectedLanguage.careerTitle}</Link>
                                            </div>
                                            <Link className='contact-btn' to={"/sayHello"}>
                                                <p className='contact-btn-text'> {selectedLanguage.ConsultationBtnTitle}</p>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <div className='nothing-under-burger-block'>
                                    <div onClick={handleChangeTheme}
                                         className={`theme-btn ${isRotating ? 'rotating' : ''} burger-theme-btn`}
                                         style={{
                                             backgroundColor: selectedTheme.primaryBackground,
                                             borderColor: selectedTheme.primaryLine,
                                         }}>
                                        <img
                                            src={selectedThemeName !== 'dark' ? moon : sun}
                                            alt="Toggle Theme"
                                            className={isRotating ? 'rotating' : ''}
                                        />
                                    </div>
                                    <div className='nothing-under-burger' style={{
                                        backgroundColor: selectedTheme.primaryBackground,
                                        borderColor: selectedTheme.primaryLine
                                    }}>
                                    </div>
                                </div>

                            </div>
                        </div>)}
                </div>
            </header>
        </>)
}

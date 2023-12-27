import React, {useEffect, useState} from 'react';
import './mainScreen.css';
import titleBg from '../../data/img/top-title-img.svg';
import {HeaderNavBar} from '../../components/headerNavBar/headerNavBar';
import {useBuildContext} from '../../store/languageThemeStore';
import {Footer} from "../../components/footer/footer";
import {Link} from "react-router-dom";
import longLogo from "../../data/img/09.BUILDlong.svg";


export const MainScreen = () => {
    const {
        selectedLanguage,
        selectedTheme,
    } = useBuildContext();
    // const [showOverlay, setShowOverlay] = useState(true);
    //
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setShowOverlay(false);
    //     }, 1300);
    //
    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <div className="App" style={{
            backgroundColor: selectedTheme.primaryBackground,
            borderColor: selectedTheme.primaryLine
        }}>
            {/*<div*/}
            {/*    className="overlay"*/}
            {/*    style={{*/}
            {/*        opacity: showOverlay ? 1 : 0,*/}
            {/*        transform: showOverlay ? 'translateY(0%)' : 'translateY(100%)',*/}
            {/*        backgroundColor: selectedTheme.primaryBackground,*/}
            {/*        borderColor: selectedTheme.primaryLine*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <div*/}
            {/*        className="overlay-content"*/}
            {/*        style={{*/}
            {/*            opacity: showOverlay ? 1 : 0,*/}
            {/*            transform: showOverlay ? 'translate(-50%, -50%)' : 'translate(-50%, -150%)',*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        <img src={longLogo} alt={'logo'}/>*/}
            {/*        <h1>{selectedLanguage.WebStudioTitle}</h1>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="main-block" style={{
                backgroundColor: selectedTheme.primaryBackground,
                borderColor: selectedTheme.primaryLine,
            }}>
                <HeaderNavBar/>
                <div className='main-company-title-info' style={{
                    backgroundColor: selectedTheme.primaryBackground,
                    borderColor: selectedTheme.primaryLine
                }}>
                    <div className='company-title-info' style={{
                        backgroundColor: selectedTheme.primaryBackground,
                        borderColor: selectedTheme.primaryLine
                    }}>
                        <div className='logo-mane-block' style={{
                            backgroundColor: selectedTheme.primaryBackground,
                            borderColor: selectedTheme.primaryLine
                        }}>
                            <p className="title-logo"
                               style={{color: selectedTheme.primaryTitle}}
                            >09. BUILD</p>
                            <p className='title-description' style={{
                                color: selectedTheme.primaryText
                            }}>{selectedLanguage.mainDescription}</p>
                        </div>
                        <div className='title-mane-btn-block' style={{
                            backgroundImage: `url(${titleBg})`,
                            borderColor: selectedTheme.primaryLine,
                            backgroundColor: selectedTheme.primaryBackground,
                        }}>
                            <div className='logo-mane-mobile-block'>
                                <p className='title-logo' style={{
                                    color: selectedTheme.primaryTitle
                                }}>09. BUILD</p>
                                <p className='title-description' style={{
                                    color: selectedTheme.primaryText
                                }}>{selectedLanguage.mainDescription}</p>
                            </div>
                            <Link className='contact-btn' to={"/projects"}>
                                <p className='contact-btn-text'> {selectedLanguage.ViewProjectsBtnTitle}</p>
                            </Link>
                        </div>
                        <div className='nothing-under-btn' style={{
                            backgroundColor: selectedTheme.primaryBackground,
                            borderColor: selectedTheme.primaryLine
                        }}>
                        </div>
                    </div>
                </div>
                <div className='main-how-it-works-info' style={{
                    backgroundColor: selectedTheme.primaryBackground,
                    borderColor: selectedTheme.primaryLine
                }}>
                    <div className='how-it-works-title' style={{
                        backgroundColor: selectedTheme.primaryBackground,
                        borderColor: selectedTheme.primaryLine
                    }}>
                        <p className="block-title" style={{
                            color: selectedTheme.primaryTitle,
                        }}>{selectedLanguage.howItWorksTitle}</p>
                        <p className="prev-text" style={{
                            color: selectedTheme.mainText,
                        }}>{selectedLanguage.howItWorksText}</p>
                    </div>
                    <div className='how-it-works' style={{
                        backgroundColor: selectedTheme.primaryBackground,
                        borderColor: selectedTheme.primaryLine
                    }}>
                        <div className="project-progress">
                            <div className="progress-block" style={{
                                borderColor: selectedTheme.primaryLine,
                            }}>
                                <div>
                                    <h6>{selectedLanguage.projectProgressTitle1}</h6>
                                    <p style={{
                                        color: selectedTheme.mainText,
                                    }}>{selectedLanguage.projectProgressText1}</p>
                                </div>
                                <p className="progress-number" style={{
                                    color: selectedTheme.primaryText,
                                }}>01</p>
                            </div>
                            <div className="progress-block" style={{
                                borderColor: selectedTheme.primaryLine,
                            }}>
                                <div>
                                    <h6>{selectedLanguage.projectProgressTitle2}</h6>
                                    <p style={{
                                        color: selectedTheme.mainText,
                                    }}>{selectedLanguage.projectProgressText2}</p>
                                </div>
                                <p className="progress-number" style={{
                                    color: selectedTheme.primaryText,
                                }}>02</p>
                            </div>
                            <div className="progress-block" style={{
                                borderColor: selectedTheme.primaryLine,
                            }}>
                                <div>
                                    <h6>{selectedLanguage.projectProgressTitle3}</h6>
                                    <p style={{
                                        color: selectedTheme.mainText,
                                    }}>{selectedLanguage.projectProgressText3}</p>
                                </div>
                                <p className="progress-number" style={{
                                    color: selectedTheme.primaryText,
                                }}>03</p>
                            </div>
                            <div className="progress-block last">
                                <div>
                                    <h6>{selectedLanguage.projectProgressTitle4}</h6>
                                    <p style={{
                                        color: selectedTheme.mainText,
                                    }}>{selectedLanguage.projectProgressText4}</p>
                                </div>
                                <p className="progress-number" style={{
                                    color: selectedTheme.primaryText,
                                }}>04</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="discuss" style={{
                backgroundColor: selectedTheme.primaryReverseBackground,
                borderColor: selectedTheme.primaryReverseLine
            }}>
                <div className="discuss-block" style={{
                    backgroundColor: selectedTheme.primaryReverseBackground,
                    borderColor: selectedTheme.primaryReverseLine
                }}>
                    <div className='discuss-left-block' style={{
                        backgroundImage: `url(${titleBg})`,
                        borderColor: selectedTheme.primaryReverseLine
                    }}>
                        <p className='discuss-left-title' style={{
                            color: selectedTheme.primaryBackground
                        }}>{selectedLanguage.discussTitle}</p>
                    </div>
                    <div className='discuss-right-block' style={{
                        borderColor: selectedTheme.primaryReverseLine
                    }}>
                        <div className='discuss-right-content'>
                            <p className='discuss-left-title-mobile' style={{
                                color: selectedTheme.primaryBackground
                            }}>{selectedLanguage.discussTitle}</p>
                            <div className='discuss-right-text' style={{
                                color: selectedTheme.primaryReverseText
                            }}>
                                {selectedLanguage.discussText}
                            </div>
                            <Link className='discuss-contact-btn' to={"/sayHello"}>
                                <p className='contact-btn-text'>{selectedLanguage.ConsultationBtnTitle}</p>
                            </Link>
                        </div>
                        <div className='nothing-discuss-btn' style={{
                            backgroundColor: selectedTheme.primaryReverseBackground,
                            borderColor: selectedTheme.primaryReverseLine
                        }}></div>
                    </div>
                </div>
            </div>
            <div className='main-how-it-works-info' style={{
                backgroundColor: selectedTheme.primaryBackground,
                borderColor: selectedTheme.primaryLine
            }}>
                <div className='how-it-works-title' style={{
                    backgroundColor: selectedTheme.primaryBackground,
                    borderColor: selectedTheme.primaryLine
                }}>
                    <p className="block-title" style={{
                        color: selectedTheme.primaryTitle,
                    }}>{selectedLanguage.servicesMainTitle}</p>
                    <p className="prev-text" style={{
                        color: selectedTheme.mainText,
                    }}>{selectedLanguage.servicesMainText}</p>
                </div>
                <div className='how-it-works' style={{
                    backgroundColor: selectedTheme.primaryBackground,
                    borderColor: selectedTheme.primaryLine
                }}>
                    <div className="services-progress">
                        <div className="services-block" style={{
                            borderColor: selectedTheme.primaryLine,
                        }}>
                            <div>
                                <h6>{selectedLanguage.servicesTitle1}</h6>
                                <p style={{
                                    color: selectedTheme.mainText,
                                }}>{selectedLanguage.servicesText1}</p>
                            </div>
                        </div>
                        <div className="services-block" style={{
                            borderColor: selectedTheme.primaryLine,
                        }}>
                            <div>
                                <h6>{selectedLanguage.servicesTitle2}</h6>
                                <p style={{
                                    color: selectedTheme.mainText,
                                }}>{selectedLanguage.servicesText2}</p>
                            </div>
                        </div>
                        <div className="services-block last" style={{
                            borderColor: selectedTheme.primaryLine,
                        }}>
                            <div>
                                <h6>{selectedLanguage.servicesTitle3}</h6>
                                <p style={{
                                    color: selectedTheme.mainText,
                                }}>{selectedLanguage.servicesText3}</p>
                            </div>
                        </div>
                    </div>
                    <div className="services-progress second" style={{
                        borderColor: selectedTheme.primaryLine,
                    }}>
                        <div className="services-block" style={{
                            borderColor: selectedTheme.primaryLine,
                        }}>
                            <div>
                                <h6>{selectedLanguage.servicesTitle4}</h6>
                                <p style={{
                                    color: selectedTheme.mainText,
                                }}>{selectedLanguage.servicesText4}</p>
                            </div>
                        </div>
                        <div className="services-block" style={{
                            borderColor: selectedTheme.primaryLine,
                        }}>
                            <div>
                                <h6>{selectedLanguage.servicesTitle5}</h6>
                                <p style={{
                                    color: selectedTheme.mainText,
                                }}>{selectedLanguage.servicesText5}</p>
                            </div>
                        </div>
                        <div className="services-block last" style={{
                            borderColor: selectedTheme.primaryLine,
                        }}>
                            <div>
                                <h6>{selectedLanguage.servicesTitle6}</h6>
                                <p style={{
                                    color: selectedTheme.mainText,
                                }}>{selectedLanguage.servicesText6}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main-how-it-works-info' style={{
                backgroundColor: selectedTheme.primaryBackground,
                borderColor: selectedTheme.primaryLine
            }}>
                <div className='need-website-title' style={{
                    backgroundColor: selectedTheme.primaryBackground,
                    borderColor: selectedTheme.primaryLine
                }}>
                    <p className="block-title" style={{
                        color: selectedTheme.primaryTitle,
                    }}>{selectedLanguage.needWebsiteMainTitle}</p>
                    <p className="prev-text" style={{
                        color: selectedTheme.mainText,
                    }}>{selectedLanguage.needWebsiteMainText}</p>
                </div>
                <div className='how-it-works' style={{
                    backgroundColor: selectedTheme.primaryBackground,
                    borderColor: selectedTheme.primaryLine
                }}>
                    <div className="services-progress">
                        <div className="need-website-block" style={{
                            borderColor: selectedTheme.primaryLine,
                        }}>
                            <div>
                                <h6>{selectedLanguage.needWebsiteTitle1}</h6>
                                <p style={{
                                    color: selectedTheme.mainText,
                                }}>{selectedLanguage.needWebsiteText1}</p>
                            </div>
                        </div>
                        <div className="need-website-block last" style={{
                            borderColor: selectedTheme.primaryLine,
                        }}>
                            <div>
                                <h6>{selectedLanguage.needWebsiteTitle2}</h6>
                                <p style={{
                                    color: selectedTheme.mainText,
                                }}>{selectedLanguage.needWebsiteText2}</p>
                            </div>
                        </div>
                    </div>
                    <div className="services-progress second" style={{
                        borderColor: selectedTheme.primaryLine,
                    }}>
                        <div className="need-website-block" style={{
                            borderColor: selectedTheme.primaryLine,
                        }}>
                            <div>
                                <h6>{selectedLanguage.needWebsiteTitle3}</h6>
                                <p style={{
                                    color: selectedTheme.mainText,
                                }}>{selectedLanguage.needWebsiteText3}</p>
                            </div>
                        </div>
                        <div className="need-website-block last" style={{
                            borderColor: selectedTheme.primaryLine,
                        }}>
                            <div>
                                <h6>{selectedLanguage.needWebsiteTitle4}</h6>
                                <p style={{
                                    color: selectedTheme.mainText,
                                }}>{selectedLanguage.needWebsiteText4}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default MainScreen;

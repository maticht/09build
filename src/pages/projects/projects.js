import React, {useState} from 'react';
import projectsJSON from '../../data/projectsInfo/projects.json'
import {useBuildContext} from "../../store/languageThemeStore";
import {SimpleHeader} from "../../components/simpleHeader/simpleHeader";
import {Footer} from "../../components/footer/footer";
import arrow from "../../data/img/arrow.svg";
import close from '../../data/img/close.svg'
import linkArrow from "../../data/img/link-arrow.svg";

function Projects() {
    const {
        selectedTheme,
        selectedThemeName,
        selectedLanguage
    } = useBuildContext();

    const [openBlocks, setOpenBlocks] = useState({0: true});
    const [rotation, setRotation] = useState({0: 180});
    const [slideIndices, setSlideIndices] = useState(projectsJSON.projects.map(() => 0));
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = (index) => {
        setModalOpen((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const toggleBlock = (index) => {
        setOpenBlocks((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
        setRotation((prevRotation) => ({
            ...prevRotation,
            [index]: prevRotation[index] !== undefined ? prevRotation[index] + 180 : 180,
        }));
    };

    const prevSlide = (index, length) => {
        setSlideIndices(prevIndices => {
            const newIndices = [...prevIndices];
            newIndices[index] = (newIndices[index] - 1 + length) % length;
            return newIndices;
        });
    };
    const nextSlide = (index, length) => {
        setSlideIndices(prevIndices => {
            const newIndices = [...prevIndices];
            newIndices[index] = (newIndices[index] + 1) % length;
            return newIndices;
        });
    };

    return (
        <div className="main-projects-block" style={{
            backgroundColor: selectedTheme.primaryBackground,
            borderColor: selectedTheme.primaryLine
        }}>
            <SimpleHeader/>
            <div className='projects-block' style={{
                backgroundColor: selectedTheme.primaryBackground,
                borderColor: selectedTheme.primaryLine
            }}>
                <div className='hello-сareer-block-info' style={{
                    backgroundColor: selectedTheme.primaryBackground,
                    borderColor: selectedTheme.primaryLine
                }}>
                    <div className='сareer-info' style={{
                        backgroundColor: selectedTheme.primaryBackground,
                        borderColor: selectedTheme.primaryLine
                    }}>
                        <p className="block-title" style={{
                            color: selectedTheme.primaryTitle,
                        }}>{selectedLanguage.OurProjectsTitle}</p>
                        <p className="prev-text" style={{
                            color: selectedTheme.mainText,
                        }}>{selectedLanguage.OurProjectsText}</p>
                    </div>
                    <div className='project-info'>
                        {projectsJSON.projects.map((project, index) => (
                            <div className='project-block' style={{
                                backgroundColor: selectedTheme.primaryBackground,
                                borderColor: selectedTheme.primaryLine
                            }}>
                                <div className='project-close-block' style={{
                                    backgroundColor: selectedTheme.primaryBackground,
                                    borderColor: selectedTheme.primaryLine
                                }}
                                     onClick={() => toggleBlock(index)}
                                >
                                    <div className='project-close-left'>
                                        <img
                                            className='project-close-logo'
                                            style={{
                                                borderColor: selectedTheme.primaryLine
                                            }}
                                            src={selectedThemeName === 'dark' ? project.logo[0] : project.logo[1]}
                                        />
                                        <p
                                            style={{
                                                color: selectedTheme.primaryTitle,
                                            }}
                                            className='project-close-name'
                                        >
                                            {project.title}
                                        </p>
                                    </div>
                                    <img
                                        className="project-arrow-img"
                                        style={{
                                            transform: `rotate(${rotation[index]}deg)`,
                                        }}
                                        src={arrow}
                                        alt="arrow"
                                    />
                                </div>
                                {openBlocks[index] && (
                                    <div className='project-open-block' style={{
                                        backgroundColor: selectedTheme.primaryBackground,
                                        borderColor: selectedTheme.primaryLine
                                    }}>
                                        <div className='project-open-info' style={{
                                            backgroundColor: selectedTheme.primaryBackground,
                                            borderColor: selectedTheme.primaryLine
                                        }}>
                                            <p
                                                style={{
                                                    color: selectedTheme.primaryText,
                                                }}
                                                className='project-close-description'
                                            >
                                                {project.description}
                                            </p>
                                            <div className='slider-mobile' style={{
                                                backgroundColor: selectedTheme.primaryBackground,
                                                borderColor: selectedTheme.primaryLine
                                            }}>
                                                <div
                                                    className='slider-left-btn'
                                                    style={{
                                                        backgroundColor: selectedTheme.primaryBackground,
                                                        borderColor: selectedTheme.primaryLine
                                                    }}
                                                    onClick={() => prevSlide(index, project.additional_photos.length)}
                                                >
                                                    <img
                                                        src={arrow}
                                                        alt="arrow"
                                                    />
                                                </div>
                                                <div className="slider-image-container" onClick={() => openModal(index)}>
                                                    <img
                                                        src={project.additional_photos[slideIndices[index]]}
                                                        alt={`Slide ${slideIndices[index]}`}
                                                        className="slider-image"
                                                    />
                                                </div>
                                                <div
                                                    className='slider-right-btn'
                                                    style={{
                                                        backgroundColor: selectedTheme.primaryBackground,
                                                        borderColor: selectedTheme.primaryLine
                                                    }}
                                                    onClick={() => nextSlide(index, project.additional_photos.length)}
                                                >
                                                    <img
                                                        src={arrow}
                                                        alt="arrow"
                                                    />
                                                </div>
                                            </div>
                                            <a href={project.link}
                                               target="_blank"
                                               className='project-link-btn'
                                               style={{
                                                   backgroundColor: selectedTheme.primaryBackground,
                                                   borderColor: selectedTheme.primaryLine
                                               }}
                                            >
                                                <p
                                                    style={{
                                                        color: selectedTheme.primaryText,
                                                    }}
                                                >
                                                    {selectedLanguage.projectLink}
                                                </p>
                                                <img src={linkArrow}/>
                                            </a>
                                        </div>
                                        <div className='slider'>
                                            <div
                                                className='slider-left-btn'
                                                style={{
                                                    backgroundColor: selectedTheme.primaryBackground,
                                                    borderColor: selectedTheme.primaryLine
                                                }}
                                                onClick={() => prevSlide(index, project.additional_photos.length)}
                                            >
                                                <img
                                                    src={arrow}
                                                    alt="arrow"
                                                />
                                            </div>
                                            <div className="slider-image-container" onClick={() => openModal(index)}>
                                                <img
                                                    src={project.additional_photos[slideIndices[index]]}
                                                    alt={`Slide ${slideIndices[index]}`}
                                                    className="slider-image"
                                                />
                                            </div>
                                            <div
                                                className='slider-right-btn'
                                                style={{
                                                    backgroundColor: selectedTheme.primaryBackground,
                                                    borderColor: selectedTheme.primaryLine
                                                }}
                                                onClick={() => nextSlide(index, project.additional_photos.length)}
                                            >
                                                <img
                                                    src={arrow}
                                                    alt="arrow"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            {isModalOpen[index] && (
                                                <div className="modal-overlay">
                                                    <img  className="close-overlay" src={close}  onClick={closeModal}></img>
                                                    <div className="slider-overlay" style={{
                                                        borderColor: selectedTheme.primaryLine
                                                    }}>
                                                        <div
                                                            className='slider-left-btn'
                                                            style={{
                                                                backgroundColor: selectedTheme.primaryBackground,
                                                                borderColor: selectedTheme.primaryLine
                                                            }}
                                                            onClick={() => prevSlide(index, project.additional_photos.length)}
                                                        >
                                                            <img
                                                                src={arrow}
                                                                alt="arrow"
                                                            />
                                                        </div>
                                                        <div className="slider-image-container modal-image-container">
                                                            <img
                                                                src={project.additional_photos[slideIndices[index]]}
                                                                alt={`Slide ${slideIndices[index]}`}
                                                                className="slider-image"
                                                            />
                                                        </div>
                                                        <div
                                                            className='slider-right-btn'
                                                            style={{
                                                                backgroundColor: selectedTheme.primaryBackground,
                                                                borderColor: selectedTheme.primaryLine
                                                            }}
                                                            onClick={() => nextSlide(index, project.additional_photos.length)}
                                                        >
                                                            <img
                                                                src={arrow}
                                                                alt="arrow"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
        ;
}

export default Projects;

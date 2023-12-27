import React, {useState} from 'react';
import '../mainScreen/mainScreen.css';
import {useNavigate} from "react-router-dom";
import $ from 'jquery';
import {SimpleHeader} from "../../components/simpleHeader/simpleHeader";
import {Footer} from "../../components/footer/footer";
import {useBuildContext} from "../../store/languageThemeStore";
import arrow from "../../data/img/arrow.svg";

let data = new FormData();
function handleFormSubmit(event) {
    event.stopPropagation();
    event.preventDefault();

    let form = event.currentTarget;
    let submit = $('.submit', form);
    let files = $('input[type=file]');

    $('.submit', form).val('Отправка...');
    $('input, textarea', form).attr('disabled', '');

    data.append('Сфера бизнеса', $('[name="businessType"]', form).val());
    data.append('Дополнительная информация', $('[name="additionally"]', form).val());

    files.each(function (key, file) {
        let cont = file.files;
        if (cont) {
            $.each(cont, function (key, value) {
                data.append(key, value);
            });
        }
    });

    $.ajax({
        url: 'http://server533906.nazwa.pl/09build/ajax.php',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        xhr: function () {
            let myXhr = $.ajaxSettings.xhr();
            if (myXhr.upload) {
                myXhr.upload.addEventListener('progress', function (e) {
                    if (e.lengthComputable) {
                        let percentage = (e.loaded / e.total) * 100;
                        percentage = percentage.toFixed(0);
                        $('.submit', form).html(percentage + '%');
                    }
                }, false);
            }
            return myXhr;
        },
        error: function (jqXHR, textStatus) {
            console.log(jqXHR);
            console.log(textStatus);
        },
        complete: function () {
            console.log('Complete');
            form.reset();
        }
    });
    return false;
}

function AdditionalInformation() {
    const navigate = useNavigate();
    const {selectedLanguage, selectedTheme} = useBuildContext();
    const [rotationType, setRotationType] = useState(0);
    const [isOpenType, setIsOpenType] = useState(false);
    const [selectedSiteType, setSelectedSiteType] = useState(selectedLanguage.selectSiteType);
    const [rotationBudget, setRotationBudget] = useState(0);
    const [isOpenBudget, setIsOpenBudget] = useState(false);
    const [selectedSiteBudget, setSelectedSiteBudget] = useState(selectedLanguage.chooseBudget);
    const [rotationDeadline, setRotationDeadline] = useState(0);
    const [isOpenDeadline, setIsOpenDeadline] = useState(false);
    const [selectedSiteDeadline, setSelectedSiteDeadline] = useState(selectedLanguage.deadline);
    data.append('Какой нужен сайт', selectedSiteType);
    data.append('Какой бюджет', selectedSiteBudget);
    data.append('Дедлайн', selectedSiteDeadline);

    function handleForm(event) {
        handleFormSubmit(event);
        navigate("/");
    }

    const toggleMenuType = () => {
        setRotationType(rotationType + 180);
        setIsOpenType(!isOpenType);
        setIsOpenBudget(false);
        setRotationBudget(0);
        setIsOpenDeadline(false);
        setRotationDeadline(0);
    };
    const toggleMenuBudget = () => {
        setRotationBudget(rotationBudget + 180);
        setIsOpenBudget(!isOpenBudget);
        setIsOpenType(false);
        setRotationType(0);
        setIsOpenDeadline(false);
        setRotationDeadline(0);
    };
    const toggleMenuDeadline = () => {
        setRotationDeadline(rotationDeadline + 180);
        setIsOpenDeadline(!isOpenDeadline);
        setIsOpenBudget(false);
        setRotationBudget(0);
        setIsOpenType(false);
        setRotationType(0);
    };


    return (
        <div className="main-hello-block" style={{
            backgroundColor: selectedTheme.primaryBackground,
            borderColor: selectedTheme.primaryLine
        }}>
            <SimpleHeader/>
            <div className='how-it-works-contact' style={{
                backgroundColor: selectedTheme.primaryBackground,
                borderColor: selectedTheme.primaryLine
            }}>
                <div className='additional-hello-block-info' style={{
                    backgroundColor: selectedTheme.primaryBackground,
                    borderColor: selectedTheme.primaryLine
                }}>
                    <p className="block-title" style={{
                        color: selectedTheme.primaryTitle,
                    }}>{selectedLanguage.additionalInformationTitle}</p>
                    <p className="prev-text" style={{
                        color: selectedTheme.mainText,
                    }}>{selectedLanguage.additionalInformationText}</p>
                </div>
                <form className="telegram-form" onSubmit={handleForm} style={{
                    backgroundColor: selectedTheme.primaryBackground,
                    borderColor: selectedTheme.primaryLine
                }}>
                    <div className='telegram-form-block' style={{
                        backgroundColor: selectedTheme.primaryBackground,
                        borderColor: selectedTheme.primaryLine
                    }}>
                        <div className='input-block'>
                            <div className='dropdown-menu-input' onClick={toggleMenuType} style={{
                                backgroundColor: selectedTheme.primaryBackground,
                                color: selectedTheme.mainText,
                                borderColor: selectedTheme.primaryLine
                            }}>
                                <div className='menu-btn-content'>
                                    <p style={{
                                        color: selectedTheme.mainText,
                                    }}>{selectedSiteType}</p>
                                    <img
                                        className="arrow-img"
                                        style={{transform: `rotate(${rotationType}deg)`}}
                                        src={arrow}
                                        alt="arrow"
                                    />
                                </div>
                            </div>
                            <div className={`dropdown-input-menu ${isOpenType ? 'open' : ''}`} style={{
                                backgroundColor: selectedTheme.primaryBackground,
                                borderColor: selectedTheme.primaryLine
                            }}>
                                <div>
                                    {selectedLanguage.siteType
                                        .filter((type) => type !== selectedSiteType)
                                        .map((type) => (
                                            <p
                                                style={{
                                                    color: selectedTheme.mainText,
                                                }}
                                                className='input-name'
                                                value={type}
                                                onClick={() => {
                                                    setSelectedSiteType(type);
                                                    setRotationType(rotationType + 180);
                                                    setIsOpenType(!isOpenType);
                                                }}>
                                                {type}
                                            </p>
                                        ))}
                                </div>
                            </div>
                            <div className='dropdown-menu-input' onClick={toggleMenuBudget} style={{
                                backgroundColor: selectedTheme.primaryBackground,
                                color: selectedTheme.mainText,
                                borderColor: selectedTheme.primaryLine
                            }}>
                                <div className='menu-btn-content'>
                                    <p style={{
                                        color: selectedTheme.mainText,
                                    }}>{selectedSiteBudget}</p>
                                    <img
                                        className="arrow-img"
                                        style={{transform: `rotate(${rotationBudget}deg)`}}
                                        src={arrow}
                                        alt="arrow"
                                    />
                                </div>
                            </div>
                            <div className={`dropdown-input-menu-budget ${isOpenBudget ? 'open' : ''}`} style={{
                                backgroundColor: selectedTheme.primaryBackground,
                                borderColor: selectedTheme.primaryLine
                            }}>
                                {selectedLanguage.siteBudget
                                    .filter((budget) => budget !== selectedSiteBudget)
                                    .map((budget) => (
                                        <p
                                            style={{
                                                color: selectedTheme.mainText,
                                            }}
                                            className='input-name'
                                            value={budget}
                                            onClick={() => {
                                                setSelectedSiteBudget(budget);
                                                setRotationBudget(rotationBudget + 180);
                                                setIsOpenBudget(!isOpenBudget);
                                            }}>
                                            {budget}
                                        </p>
                                    ))}
                            </div>
                            <textarea
                                style={{
                                    color: selectedTheme.mainText,
                                    backgroundColor: selectedTheme.primaryBackground,
                                    borderColor: selectedTheme.primaryLine
                                }}
                                className="telegram-textarea-input"
                                placeholder={selectedLanguage.additionalInformation}
                                name="additionally"
                            >
                                </textarea>
                        </div>
                        <div className='hello-btn-block'>
                            <div className='right-contact-block'>
                                <div className='dropdown-menu-input deadline' onClick={toggleMenuDeadline} style={{
                                    backgroundColor: selectedTheme.primaryBackground,
                                    color: selectedTheme.mainText,
                                    borderColor: selectedTheme.primaryLine
                                }}>
                                    <div className='menu-btn-content'>
                                        <p style={{
                                            color: selectedTheme.mainText,
                                        }}>{selectedSiteDeadline}</p>
                                        <img
                                            className="arrow-img"
                                            style={{transform: `rotate(${rotationDeadline}deg)`}}
                                            src={arrow}
                                            alt="arrow"
                                        />
                                    </div>
                                </div>
                                <div className={`dropdown-input-menu-deadline ${isOpenDeadline ? 'open' : ''}`}
                                     style={{
                                         backgroundColor: selectedTheme.primaryBackground,
                                         borderColor: selectedTheme.primaryLine
                                     }}>
                                    {selectedLanguage.siteDeadline
                                        .filter((deadline) => deadline !== selectedSiteDeadline)
                                        .map((deadline) => (
                                            <p
                                                style={{
                                                    color: selectedTheme.mainText,
                                                }}
                                                className='input-name'
                                                value={deadline}
                                                onClick={() => {
                                                    setSelectedSiteDeadline(deadline);
                                                    setRotationDeadline(rotationDeadline + 180);
                                                    setIsOpenDeadline(!isOpenDeadline);
                                                }}>
                                                {deadline}
                                            </p>
                                        ))}
                                </div>
                                <input
                                    className="telegram-input-right"
                                    type="text"
                                    name="businessType"
                                    placeholder={selectedLanguage.businessArea}
                                    autoComplete="off"
                                    style={{
                                        color: selectedTheme.mainText,
                                        backgroundColor: selectedTheme.primaryBackground,
                                        borderColor: selectedTheme.primaryLine
                                    }}
                                />
                                <input className="telegram-file-input" type="file" name="file" style={{
                                    color: selectedTheme.mainText,
                                    borderColor: selectedTheme.primaryLine
                                }}/>
                                <textarea
                                    style={{
                                        color: selectedTheme.mainText,
                                        backgroundColor: selectedTheme.primaryBackground,
                                        borderColor: selectedTheme.primaryLine
                                    }}
                                    className="telegram-textarea-input-mobile"
                                    placeholder={selectedLanguage.additionalInformation}
                                    name="additionally"
                                >
                                </textarea>
                                <button type="submit" className='discuss-contact-btn'>
                                    <p className='contact-btn-text'> {selectedLanguage.ConsultationBtnTitle}</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
            <Footer/>
        </div>
    );
}

export default AdditionalInformation;

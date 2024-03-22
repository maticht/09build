import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import $ from 'jquery';
import {useBuildContext} from "../../store/languageThemeStore";
import {SimpleHeader} from "../../components/simpleHeader/simpleHeader";
import {Footer} from "../../components/footer/footer";
function handleFormSubmit(event, navigate) {
    event.stopPropagation();
    event.preventDefault();
    let form = event.currentTarget;
    let data = new FormData();

    $('.submit', form).val('Отправка...');
    $('input, textarea', form).attr('disabled', '');

    data.append('Имя', $('[name="name"]', form).val());
    data.append('Связь', $('[name="phone"]', form).val());

    $.ajax({
        url: 'https://nashedelo.pl/ajax.php',
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
            // Handle error here
        },
        complete: function () {
            console.log('Complete');
            form.reset();
        }
    });

    return false;
}
function SayHello() {
    const navigate = useNavigate();
    const {
        selectedTheme,
        selectedLanguage
    } = useBuildContext();
    function handleForm(event) {
        handleFormSubmit(event);
        navigate("/sayHello/additionalInformation");
    }
    return (
        <div className="main-hello-block" style={{
            backgroundColor: selectedTheme.primaryBackground,
            borderColor: selectedTheme.primaryLine
        }}>
            <SimpleHeader/>
            <div className='how-it-works-contact say-hello-contact' style={{
                backgroundColor: selectedTheme.primaryBackground,
                borderColor: selectedTheme.primaryLine
            }}>
                <div className='hello-block-info' style={{
                    backgroundColor: selectedTheme.primaryBackground,
                    borderColor: selectedTheme.primaryLine
                }}>
                    <p className="block-title" style={{
                        color: selectedTheme.primaryTitle,
                    }}>{selectedLanguage.contactsTitle}</p>
                    <p className="prev-text" style={{
                        color: selectedTheme.mainText,
                    }}>{selectedLanguage.contactsText}</p>
                </div>
                <form className="telegram-form say-hello-telegram-form" onSubmit={handleForm} style={{
                    backgroundColor: selectedTheme.primaryBackground,
                    borderColor: selectedTheme.primaryLine
                }}>
                    <div className='telegram-form-block-column' style={{
                        backgroundColor: selectedTheme.primaryBackground,
                        borderColor: selectedTheme.primaryLine
                    }}>
                        <div className='input-block'>
                            <input
                                className="telegram-input"
                                type="text"
                                name="name"
                                placeholder={selectedLanguage.nameInput}
                                autoComplete="off"
                                style={{
                                    color: selectedTheme.mainText,
                                    backgroundColor: selectedTheme.primaryBackground,
                                    borderColor: selectedTheme.primaryLine
                                }}
                            />
                            <input
                                className="telegram-input last-input"
                                type="text"
                                name="phone"
                                placeholder={selectedLanguage.emailInput}
                                autoComplete="off"
                                style={{
                                    color: selectedTheme.mainText,
                                    backgroundColor: selectedTheme.primaryBackground,
                                    borderColor: selectedTheme.primaryLine
                                }}
                            />
                        </div>
                        <div className='hello-btn-block'>
                            <button  type="submit" className='contact-btn hello-contact-btn'>
                                <p className='contact-btn-text'> {selectedLanguage.ConsultationBtnTitle}</p>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    );
}

export default SayHello;

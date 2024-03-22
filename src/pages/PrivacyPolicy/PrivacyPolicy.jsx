import React from 'react';
import {useBuildContext} from "../../store/languageThemeStore";
import {SimpleHeader} from "../../components/simpleHeader/simpleHeader";
import {Footer} from "../../components/footer/footer";
import './privacyPolicy.css'

const PrivacyPolicy = () => {
    const {
        selectedLanguage,
        selectedTheme,
    } = useBuildContext();
    return (
        <div className="privacy-policy-canteiner" style={{
            backgroundColor: selectedTheme.primaryBackground,
            borderColor: selectedTheme.primaryLine,
        }}>
            <div>
                <SimpleHeader/>
                <div className='privacy-policy-block' style={{
                    backgroundColor: selectedTheme.primaryBackground,
                    borderColor: selectedTheme.primaryLine,
                    color: selectedTheme.mainText,
                }}>
                    <h1 style={{ color: selectedTheme.primaryTitle }}>{selectedLanguage.privacyPolicy}</h1>
                    <p><strong>{selectedLanguage.effectiveDate}</strong></p>
                    <p>{selectedLanguage.welcomeText}</p>

                    <h2 style={{ color: selectedTheme.primaryTitle }}>{selectedLanguage.informationWeCollectTitle}</h2>
                    <p>{selectedLanguage.informationWeCollectText}</p>
                    <ul>
                        {selectedLanguage.informationCategories.map((item, index) => (
                            <li key={index}><strong>{item.split(': ')[0]}</strong>: {item.split(': ')[1]}</li>
                        ))}
                    </ul>

                    <h2 style={{ color: selectedTheme.primaryTitle }}>{selectedLanguage.howWeUseYourInformationTitle}</h2>
                    <p>We use the information we collect for various purposes, including:</p>
                    <ul>
                        {selectedLanguage.howWeUseYourInformationText.map((use, index) => (
                            <li key={index}>{use}</li>
                        ))}
                    </ul>

                    <h2 style={{ color: selectedTheme.primaryTitle }}>{selectedLanguage.sharingYourPersonalInformationTitle}</h2>
                    <p>{selectedLanguage.sharingYourPersonalInformationText}</p>

                    <h2 style={{ color: selectedTheme.primaryTitle }}>{selectedLanguage.yourRightsAndChoicesTitle}</h2>
                    <p>{selectedLanguage.yourRightsAndChoicesText}</p>
                    <ul>
                        {selectedLanguage.rightsAndChoicesList.map((right, index) => (
                            <li key={index}>{right}</li>
                        ))}
                    </ul>

                    <h2 style={{ color: selectedTheme.primaryTitle }}>{selectedLanguage.securityTitle}</h2>
                    <p>{selectedLanguage.securityText}</p>

                    <h2 style={{ color: selectedTheme.primaryTitle }}>{selectedLanguage.updatesToThisPolicyTitle}</h2>
                    <p>{selectedLanguage.updatesToThisPolicyText}</p>

                    <h2 style={{ color: selectedTheme.primaryTitle }}>{selectedLanguage.contactInformationTitle}</h2>
                    <p>{selectedLanguage.contactInformationText}
                        <a className='privacy-policy-mail'
                           href={`mailto:${selectedLanguage.contactEmail}`}> {selectedLanguage.contactEmail}</a>
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default PrivacyPolicy;

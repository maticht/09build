import React from 'react';
import {useBuildContext} from "../../store/languageThemeStore";
import {SimpleHeader} from "../../components/simpleHeader/simpleHeader";
import {Footer} from "../../components/footer/footer";

function Career() {
    const {
        selectedTheme,
        selectedLanguage
    } = useBuildContext();

    return (
        <div className="main-сareer-block" style={{
            backgroundColor: selectedTheme.primaryBackground,
            borderColor: selectedTheme.primaryLine
        }}>
            <SimpleHeader/>
            <div className='сareer-block' style={{
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
                        }}>{selectedLanguage.careerTitle}</p>
                        <p className="prev-text" style={{
                            color: selectedTheme.mainText,
                        }}>{selectedLanguage.careerText}</p>
                    </div>
                    <div className='none-сareer-info'>
                        <p className="prev-text" style={{
                            color: selectedTheme.mainText,
                        }}>{selectedLanguage.careerNoneInfo}</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <Footer/>
        </div>

    );
}

export default Career;

import React, { useEffect, useRef } from 'react';
import { useBuildContext } from '../../store/languageThemeStore';

const LogoComponent = ({ phrases, period }) => {
    const typewriteRef = useRef(null);
    const {
        selectedLanguage,
        selectedTheme,
    } = useBuildContext();

    // useEffect(() => {
    //     let isDeleting = false;
    //     let txt = '';
    //     let loopNum = 0;
    //     let element = typewriteRef.current;
    //
    //     if (element && Array.isArray(phrases) && phrases.length > 0) {
    //         let toRotate = phrases;
    //         let periodVal = parseInt(period, 10) || 2000;
    //         let tick = () => {
    //             let i = loopNum % toRotate.length;
    //             let fullTxt = toRotate[i];
    //
    //             if (isDeleting) {
    //                 txt = fullTxt.substring(0, txt.length - 1);
    //             } else {
    //                 txt = fullTxt.substring(0, txt.length + 1);
    //             }
    //
    //             element.textContent = txt; // Use the current text from phrases array
    //
    //             let delta = 200 - Math.random() * 100;
    //
    //             if (isDeleting) {
    //                 delta /= 2;
    //             }
    //
    //             if (!isDeleting && txt === fullTxt) {
    //                 delta = periodVal;
    //                 isDeleting = true;
    //             } else if (isDeleting && txt === '') {
    //                 isDeleting = false;
    //                 loopNum++;
    //                 delta = 500;
    //             }
    //
    //             setTimeout(() => {
    //                 tick();
    //             }, delta);
    //         };
    //         tick();
    //     }
    //
    //     return () => clearTimeout();
    // }, [phrases, period]);

    return (
        <p
            className="title-logo"
            style={{
                color: selectedTheme.primaryTitle,
            }}
            data-period="2000"
            ref={typewriteRef}
        ></p>
    );
};

export default LogoComponent;




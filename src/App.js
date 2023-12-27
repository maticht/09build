import React from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import MainScreen from "./pages/mainScreen/mainScreen";
import Projects from "./pages/projects/projects";
import Career from "./pages/сareer/сareer";
import SayHello from "./pages/sayHello/sayHello";
import AdditionalInformation from "./pages/additionalInformation/additionalInformation";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import { useBuildContext } from './store/languageThemeStore';

function App() {
    const { selectedTheme } = useBuildContext();

    const commonStyle = {
        backgroundColor: selectedTheme.primaryBackground,
        borderColor: selectedTheme.primaryLine,
    };
    return (
        <>
            <style>
                {`
                    body {
                        margin: 0;
                        font-family: "Malgun Gothic";
                        background-color: ${commonStyle.backgroundColor};
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                        zoom: 80%;
                    }
                `}
            </style>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainScreen />}/>
                    <Route path="/sayHello" element={<SayHello />}/>
                    <Route path="/projects" element={<Projects />}/>
                    <Route path="/сareer" element={<Career />}/>
                    <Route path="/sayHello/additionalInformation" element={<AdditionalInformation />}/>
                    <Route path="/PrivacyPolicy" element={<PrivacyPolicy />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;

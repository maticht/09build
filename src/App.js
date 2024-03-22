import React from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import MainScreen from "./pages/mainScreen/mainScreen";
import Projects from "./pages/projects/projects";
import Career from "./pages/сareer/сareer";
import SayHello from "./pages/sayHello/sayHello";
import AdditionalInformation from "./pages/additionalInformation/additionalInformation";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import {useBuildContext} from './store/languageThemeStore';

function App() {
    const {selectedTheme} = useBuildContext();

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
                        font-family: "Manrope", sans-serif;
                        background-color: ${commonStyle.backgroundColor};
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                        zoom: 80%;
                    }
                    body::-webkit-scrollbar {
                        width: 4px;
                    }

                    body::-webkit-scrollbar-track {
                        background: #3b3b3b;
                    }

                    body::-webkit-scrollbar-thumb {
                        background: linear-gradient(#5B67C1, #939CDE);
                    }

                    body::-webkit-scrollbar-thumb:hover {
                        background-color: #5B67C1;
                    }
                `}
            </style>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainScreen/>}/>
                    <Route path="/sayHello" element={<SayHello/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/сareer" element={<Career/>}/>
                    <Route path="/sayHello/additionalInformation" element={<AdditionalInformation/>}/>
                    <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

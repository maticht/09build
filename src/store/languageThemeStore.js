import React,{useState,useContext, createContext, useEffect} from "react";
import de from '../data/languages/De';
import en from '../data/languages/En';
import es from '../data/languages/Es';
import it from '../data/languages/It';
import pl from '../data/languages/Pl';
import pt from '../data/languages/Pt';
import ru from '../data/languages/Ru';
import darkTheme from '../data/themes/darkTheme';
import lightTheme from '../data/themes/lightTheme';
export const BuildContext = createContext();


export const BuildProvider = ({children}) => {

    const languages = [de, en, es, it, pl, pt, ru];
    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem('userInfo')
            ? languages.find((lang) => lang.code === JSON.parse(localStorage.getItem('userInfo')).selectedLanguageCode) || languages[1]
            : languages[1]
    );
    const [selectedThemeName, setSelectedThemeName] = useState(
        localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo')).selectedThemeName
            : 'dark'
    );
    const [selectedTheme, setSelectedTheme] = useState(
        selectedThemeName === 'dark' ? darkTheme : lightTheme
    );

    useEffect(() => {
        if (selectedThemeName === 'dark') {
            setSelectedTheme(darkTheme);
        } else {
            setSelectedTheme(lightTheme);
        }
    }, [selectedThemeName]);

    const toggleTheme = () => {
        setSelectedThemeName(selectedThemeName === 'dark' ? 'light' : 'dark');
    };

    return (
        <BuildContext.Provider
            value={{
                selectedLanguage,
                setSelectedLanguage,
                selectedThemeName,
                setSelectedThemeName,
                selectedTheme,
                setSelectedTheme,
                languages,
                toggleTheme
            }}
        >
            {children}
        </BuildContext.Provider>
    );
}

export const useBuildContext = () => {
    return useContext(BuildContext);
};


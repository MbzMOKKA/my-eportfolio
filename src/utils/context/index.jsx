//Imports
import React, { useState, createContext } from 'react';

//Exports
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(0);
    function switchLanguage() {
        switch (language) {
            case 0:
                setLanguage(1);
                break;
            case 1:
                setLanguage(0);
                break;
            default:
                console.error("You shouldn't be seeing this");
                break;
        }
    }

    return <LanguageContext.Provider value={{ language, switchLanguage }}>{children}</LanguageContext.Provider>;
};

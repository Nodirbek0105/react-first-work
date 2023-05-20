import { createContext, useEffect, useState } from "react";
import uzbek from "./../locales/uzbek.json"
import english from "./../locales/english.json"
let languages = ["english", "uzbek"]
let stringsArr = {
    english,
    uzbek,
}
export const LanguageContext = createContext({
    language: "english",
    strings: stringsArr.english,
    languages
})

export default function LanguageProvider({ children }) {
    function toggleLanguage(lang) {

    }
    return (
        <LanguageContext.Provider value={{ languages, stringsArr, toggleLanguage }} >
            {children}
        </LanguageContext.Provider >
    )
}
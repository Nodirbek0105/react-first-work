import { createContext, useState } from "react";
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
    
export default function LanguageProvider({children}) {
const [language, setLanguage] = useState("english")
    function toggleLanguage(lang) {
        console.log(lang);
        setLanguage(lang)
    }
    return (
        <LanguageContext.Provider value={{ language, languages, stringsArr ,  toggleLanguage, setLanguage }} >
            {children}
        </LanguageContext.Provider >
    )
}
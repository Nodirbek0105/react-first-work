import React from 'react'
import Todo from "./components/todo/todo"
import LanguageProvider from './context/LanguageContext'

export default function App() {
    return (
        <LanguageProvider>
            <Todo/>
        </LanguageProvider>
    )
}

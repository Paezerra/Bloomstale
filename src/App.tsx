import { useState } from 'react'
import './App.css'
import Menu from './components/header'

function App() {
  const [languageStatus, setLanguageStatus] = useState('ES')

  const selectLanguage = (lang: string): void => {
    setLanguageStatus(lang);
  };

  return (
    <>
      <Menu languageStatus={languageStatus} selectLanguage={selectLanguage}></Menu>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Menu from './components/header'
import Hero from './components/hero';

function App() {
  const [languageStatus, setLanguageStatus] = useState('ES')

  const selectLanguage = (lang: string): void => {
    setLanguageStatus(lang);
  };

  return (
    <>
        <Menu languageStatus={languageStatus} selectLanguage={selectLanguage}></Menu>
        <Hero type='hero_section_1-1'></Hero>  
    </>
  )
}

export default App

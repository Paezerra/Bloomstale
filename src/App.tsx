import { useState } from 'react'
import './App.css'
import Menu from './components/header'
import Hero from './components/heroSections';
import CtaSection from './components/ctaSections';
import { HeroNames } from './components/heroSections';

import bannerImage from '/bannerWebPage.png'
import daisyImage from '../public/FlowerGrdi.png'

function App() {
  const [languageStatus, setLanguageStatus] = useState('ES')

  const selectLanguage = (lang: string): void => {
    setLanguageStatus(lang);
  };

  return (
    <>
      <Menu languageStatus={languageStatus} selectLanguage={selectLanguage}></Menu>
      <Hero type={HeroNames.HeroMain_1} title='Bloomstale, arte floral' primaryText='Contamos historias con Flores' secondaryText='Somos un estudio de arte centrado en la creación de cuadros Oshibana o Arte de flores prensadas ' cta1='Conoce nuestra Historia' cta2='Ir al Catálogo' thirdText='Arte Oshibana - Cuadros Florales - Preservación de flores' image={bannerImage} imageAlt='Imagen de una flor disecada con petalos morados y blancos'></Hero>
      <CtaSection type='triple_button' primaryText='OBTEN 10% OFF EN 1° PEDIDO' secondaryText='ORIGEN RESPONSABLE' thirdText='ENVIOS Y EMPAQUES'></CtaSection>
      <Hero type={HeroNames.HeroImage_1} image={daisyImage} primaryText='Más que unas flores bonitas' secondaryText='Regala flores y crea alegría'></Hero>
    </>
  )
}

export default App

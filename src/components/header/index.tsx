import React, { useState } from 'react';
import MenuItem from './menuItem';
import './index.css'


type Props = {
    languageStatus?: string;
    selectLanguage: (lang: string) => void;
};

const Menu: React.FC<Props> = ({languageStatus, selectLanguage}) => {

    const [focusedSection, setFocusedSection] = useState('Incio')


    const selectSection = (menunId: string): void => {
        setFocusedSection(menunId);
    };


    return (
        <div className='menu'>
            {/* <img src='' alt="Biotecs Logo" /> */}
            <div></div>
            <h2>Bloomstale</h2>
            <li>
                <MenuItem label='Inicio' isFocused={focusedSection === 'Inicio'} onPress={() => selectSection('Inicio')}></MenuItem>
                <MenuItem label='Servicios' isFocused={focusedSection === 'Servicios'}  onPress={() => selectSection('Servicios')}></MenuItem>
                <MenuItem label='Colecciones' isFocused={focusedSection === 'Colecciones'} onPress={() => selectSection('Colecciones')}></MenuItem>
                <MenuItem label='Nosotros' isFocused={focusedSection === 'Nosotros'}  onPress={() => selectSection('Nosotros')}></MenuItem>
                <MenuItem label='(316) - 464 9105' isFocused={focusedSection === '(316) - 464 9105'}  onPress={() => selectSection('(316) - 464 9105')}></MenuItem>
            </li>
            <li>
                <MenuItem label='ES' isFocused={languageStatus === 'ES'} onPress={() => selectLanguage('ES')}></MenuItem>
                <MenuItem label='EN' isFocused={languageStatus === 'EN'}  onPress={() => selectLanguage('EN')}></MenuItem>
            </li>

        </div>
    );
};

export default Menu
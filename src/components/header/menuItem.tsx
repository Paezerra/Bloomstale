import incio_icon_empty from "../../assets/icons/home.svg"
import incio_icon_full from "../../assets/icons/home-1.svg"
import cotizacion_icon_empty from "../../assets/icons/Group 9.svg"
import cotizacion_icon_full from "../../assets/icons/Group 10.svg"
import menu_icon_full from "../../assets/icons/grid.svg"
import menu_icon_empty from "../../assets/icons/grid-1.svg"
import proyectos_icon_full from "../../assets/icons/briefcase-1.svg"
import proyectos_icon_empty from "../../assets/icons/briefcase.svg"
import logout from "../../assets/icons/logout.svg"

import './index.css'

type Props = {
    isFocused?: boolean;
    label?: string;
    onPress?: () => void;
    specialId?: string
};

const MenuItem: React.FC<Props> = ({ isFocused, label, onPress, specialId }) => {

    let imageSRC = ''
    let buttonLabel = ''

    if (label === 'cotizaciones') {
        { isFocused ? imageSRC = cotizacion_icon_full : imageSRC = cotizacion_icon_empty }
        buttonLabel = 'Cotizaciones'
    } else if (label === 'clientes') {
        { isFocused ? imageSRC = menu_icon_full : imageSRC = menu_icon_empty }
        buttonLabel = 'Clientes'
    } else if (label === 'proyectos') {
        { isFocused ? imageSRC = proyectos_icon_full : imageSRC = proyectos_icon_empty }
        buttonLabel = 'Proyectos'
    } else if (label === 'logout') {
        imageSRC = logout
        buttonLabel = 'Cerrar Sesión'
    } else {
        // Dejo de default el menu principal asi este vacio
        { isFocused ? imageSRC = incio_icon_full : imageSRC = incio_icon_empty }
        buttonLabel = 'Menu Principal'
    }


    return (
        <a id={specialId} className={`menu_button ${isFocused ? 'focused' : 'not-focused'}`} onClick={onPress}>
            <span className={isFocused ? 'focused' : 'not-focused'}>{label}<label htmlFor=""></label></span>
        </a>

    )
}

export default MenuItem
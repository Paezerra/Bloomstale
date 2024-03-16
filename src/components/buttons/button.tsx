import styles from './buttons.module.css'


export enum ButtonNames {
    BotonLlenoVerde = 'verde_lleno',
    BotonVacioVerde = 'verde_vacio'
}

type Props = {
    type?: string;
    label?: string;
    icon?: string;
};

const Hero: React.FC<Props> = ({ type, label, icon }) => {
    
    
    return (
        <>
            <button>{label}</button>
        </>
    );
};

export default Hero
import styles from './index.module.css'
import bannerImage from '../../../public/bannerWebPage.png'
import ButtonsComponent from '../buttons/button';
import {ButtonNames} from '../buttons/button';

type Props = {
    type?: string;
    title?: string;
    image?: string;
};

const Hero: React.FC<Props> = ({ type, title, image }) => {

    let hero_section

    if (type === 'hero_section_1-1') {
        hero_section =
            <section className={styles.hero}>
                <title>Bloomstale, Arte Floral</title>
                <div className={styles.dividerLeft}>
                    <h3 className={styles.invertedText}>Arte Oshibana - Cuadros Florales - Preservación de flores</h3>
                </div>
                <div className={styles.heroContent}>
                    <ul>
                        <h1>Contamos historias con Flores</h1>
                        <h2>Somos un estudio de arte centrado en la creación de cuadros Oshibana o Arte de flores prensadas</h2>
                        <div className={styles.buttonContainer}>
                            <ButtonsComponent label='Conoce nuestra Historia' type={ButtonNames.GreenFilledButton} link=''></ButtonsComponent>
                            <ButtonsComponent label='Ir al Catálogo' type={ButtonNames.GreenEmptyButton}></ButtonsComponent>
                        </div>
                    </ul>
                    <img src={bannerImage} alt="Imagen de una flor disecada con petalos morados y blancos" />
                </div>
            </section>
    }


    return (
        <>
            {hero_section}
        </>
    );
};

export default Hero
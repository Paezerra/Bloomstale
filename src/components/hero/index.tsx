import styles from './index.module.css'
import bannerImage from '../../../public/bannerWebPage.png'

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
                            <button>Conoce nuestra Historia</button>
                            <button>Ir al Catálogo</button>
                        </div>
                    </ul>
                    <img src={bannerImage} alt="Imagen de una flor disecada con petalos morados y blancos" />
                </div>
                <h1>Hola</h1>
            </section>
    }


    return (
        <>
            {hero_section}
        </>
    );
};

export default Hero
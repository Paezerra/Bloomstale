import styles from './index.module.css'
import ButtonsComponent from '../buttons/button';
import {ButtonNames} from '../buttons/button';

type Props = {
    type?: string;
    title?: string;
    primaryText?: string;
    secondaryText?: string;
    thirdText?: string;
    image?: string;
    cta1?: string;
    cta2?: string;
};

const Hero: React.FC<Props> = ({ type, title, primaryText, secondaryText, thirdText, image, cta1, cta2 }) => {

    let hero_section

    if (type === 'hero_section_1-1') {
        hero_section =
            <section className={styles.hero}>
                <title>{title}</title>
                <div className={styles.dividerLeft}>
                    <h3 className={styles.invertedText}>{thirdText}</h3>
                </div>
                <div className={styles.heroContent}>
                    <ul>
                        <h1>{primaryText}</h1>
                        <h2>{secondaryText}</h2>
                        <div className={styles.buttonContainer}>
                            <ButtonsComponent label={cta1} type={ButtonNames.GreenFilledButton} link=''></ButtonsComponent>
                            <ButtonsComponent label={cta2} type={ButtonNames.GreenEmptyButton}></ButtonsComponent>
                        </div>
                    </ul>
                    <img src={image} alt="Imagen de una flor disecada con petalos morados y blancos" />
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
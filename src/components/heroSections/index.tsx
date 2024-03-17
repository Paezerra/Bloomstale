import styles from './index.module.css'
import ButtonsComponent from '../buttons/button';
import { ButtonNames } from '../buttons/button';

export enum HeroNames {
    HeroMain_1 = 'HeroSectionMain_1',
    HeroImage_1 = 'HeroSectionImage_1',
    HeroMain_2 = 'HeroSectionMain_2',
}

type Props = {
    type?: string;
    title?: string;
    primaryText?: string;
    secondaryText?: string;
    thirdText?: string;
    image?: string;
    imageAlt?: string;
    cta1?: string;
    cta2?: string;
    cta1Link?: string;
    cta2Link?: string;
};

const Hero: React.FC<Props> = ({ type, title, primaryText, secondaryText, thirdText, image, imageAlt, cta1, cta2, cta1Link, cta2Link }) => {

    let hero_section

    if (type === HeroNames.HeroMain_1) {
        hero_section =
            <section className={styles.hero}>
                {title && <title>{title}</title>}
                <div className={styles.dividerLeft}>
                    <h3 className={styles.invertedText}>{thirdText}</h3>
                </div>
                <div className={styles.heroContent}>
                    <ul>
                        <h1>{primaryText}</h1>
                        <img className={styles.mobileImage} src={image} alt={imageAlt} />
                        <h2>{secondaryText}</h2>
                        <div className={styles.buttonContainer}>
                            <ButtonsComponent label={cta1} type={ButtonNames.GreenFilledButton} link={cta1Link}></ButtonsComponent>
                            <ButtonsComponent label={cta2} type={ButtonNames.GreenEmptyButton} link={cta2Link}></ButtonsComponent>
                        </div>
                    </ul>
                    <img src={image} alt={imageAlt} />
                </div>
                <div className={styles.dividerleftrow}></div>
            </section>
    } else if (type === HeroNames.HeroImage_1) {
        hero_section =
            <section className={styles.hero}>
                {title && <title>{title}</title>}
                <div></div>
                <div className={styles.heroContentImage}>
                    <img src={image} alt={imageAlt} />
                    <div className={styles.textContainerImage}>
                        <h3>{primaryText}</h3>
                        <h3>{secondaryText}</h3>
                    </div>
                </div>
                <div className={styles.dividerleftrow}></div>
            </section>
    } else if (type === HeroNames.HeroMain_2) {
        hero_section =
            <section className={styles.hero2}>
                {title && <title>{title}</title>}
                <div className={styles.dividerMain2}></div>
                <div className={styles.heroContentMain2}>
                    <h2>{primaryText}</h2>
                    {/* <img className={styles.mobileImage} src={image} alt={imageAlt} /> */}
                    <div className={styles.heroContent_Within}>
                        <div className={styles.imageContainer}>
                            <img src={image} alt={imageAlt} />
                        </div>
                        <div className={styles.textContainerMain2}>
                            <h3>{secondaryText}</h3>
                            <h4>{thirdText}</h4>
                            <ButtonsComponent label={cta1} type={ButtonNames.WhiteEmptyButton} link={cta2Link}></ButtonsComponent>
                        </div>
                    </div>
                </div>
                <div className={styles.dividerleftrow}></div>
            </section>
    }
    return (
        <>
            {hero_section}
        </>
    );
};

export default Hero
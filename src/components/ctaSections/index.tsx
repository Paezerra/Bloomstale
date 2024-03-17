import styles from './index.module.css'
import ButtonsComponent from '../buttons/button';
import { ButtonNames } from '../buttons/button';

type Props = {
    type?: string;
    primaryText?: string;
    secondaryText?: string;
    thirdText?: string;
};

const CtaSection: React.FC<Props> = ({ type, primaryText, secondaryText, thirdText }) => {

    let button_section

    if (type === 'triple_button') {
        button_section =
            <section className={styles.button_section}>
                <div className={styles.underLineDiv} />
                <div className={styles.button_container}>
                    <ul>
                        <ButtonsComponent label={primaryText} type={ButtonNames.GreenEmptySquareButton} link=''></ButtonsComponent>
                        <ButtonsComponent label={secondaryText} type={ButtonNames.GreenEmptySquareButton}></ButtonsComponent>
                        <ButtonsComponent label={thirdText} type={ButtonNames.GreenEmptySquareButton}></ButtonsComponent>
                    </ul>
                </div>
                <div className={styles.upperLineDiv} />
            </section>
    }


    return (
        <>
            {button_section}
        </>
    );
};

export default CtaSection
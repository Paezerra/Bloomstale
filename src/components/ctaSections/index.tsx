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
                <div>
                </div>
                <div className={styles.button_container}>
                    <ul>
                        <ButtonsComponent label={primaryText} type={ButtonNames.GreenFilledButton} link=''></ButtonsComponent>
                        <ButtonsComponent label={secondaryText} type={ButtonNames.GreenEmptyButton}></ButtonsComponent>
                        <ButtonsComponent label={thirdText} type={ButtonNames.GreenEmptyButton}></ButtonsComponent>
                    </ul>
                </div>
            </section>
    }


    return (
        <div>
            {button_section}
        </div>
    );
};

export default CtaSection
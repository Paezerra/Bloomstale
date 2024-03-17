import React from 'react';
import styles from './buttons.module.css';

export enum ButtonNames {
    GreenFilledButton = 'green_filled',
    GreenEmptyButton = 'green_empty',
    WhiteEmptyButton = 'white_empty',
    GreenEmptySquareButton = 'green_empty_square'
}

type Props = {
    type?: string;
    label?: string;
    icon?: string;
    icon_description?: string;
    link?: string; // New prop for the destination URL
};

const ButtonsComponent: React.FC<Props> = ({ type, label, icon, icon_description, link }) => {

    let buttonItem;

    if (type === 'green_filled') {
        buttonItem = <button className={styles.greenButton}>
            {icon && <img src={icon} alt={icon_description} />}
            {label}
        </button>;
    } else if (type === 'green_empty') {
        buttonItem = <button className={styles.emptyButton}>
            {icon && <img src={icon} alt={icon_description} />}
            {label}
        </button>;
    } else if (type === 'green_empty_square') {
        buttonItem = <button className={styles.emptySquareButton}>
            {icon && <img src={icon} alt={icon_description} />}
            {label}
        </button>;
    } else if (type === 'white_empty') {
        buttonItem = <button className={styles.emptyWhiteButton}>
            {icon && <img src={icon} alt={icon_description} />}
            {label}
        </button>;
    }
    return (
        <>
            {link ? (
                <a href={link}>{buttonItem}</a> // Wrap the buttonItem in an anchor tag if link is provided
            ) : (
                buttonItem
            )}
        </>
    );
};

export default ButtonsComponent;

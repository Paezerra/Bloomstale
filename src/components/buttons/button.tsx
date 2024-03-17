import React from 'react';
import styles from './buttons.module.css';

export enum ButtonNames {
    GreenFilledButton = 'green_filled',
    GreenEmptyButton = 'green_empty'
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
        console.log('entre 1')
        buttonItem = <button className={styles.greenButton}>
            {icon && <img src={icon} alt={icon_description} />}
            {label}
        </button>;
    } else if (type === 'green_empty') {
        console.log('entre 2')
        buttonItem = <button className={styles.emptyButton}>
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

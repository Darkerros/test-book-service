import React, {ChangeEvent, FC, MouseEventHandler} from 'react';
import styles from './input.module.scss'
import {SearchIcon} from "../icons/search-icon";

interface IInputProps {
    value: string | number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;

    extraInputClass?: string;

    iconName?: "search";

    iconClassName?: string;
    placeholder?: string;

    onIconButtonClick?: MouseEventHandler<HTMLButtonElement>;
    iconButtonType?: "submit" | "button" | "reset";
}

export const Input:FC<IInputProps> = ({value, onChange, extraInputClass, iconName, iconClassName, placeholder, onIconButtonClick, iconButtonType}) => {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            default:
                return <SearchIcon className={iconClassName}/>
        }
    }

    return (
        <label className={styles.inputContainer}>
            <input type="text" value={value} onChange={onChange} placeholder={placeholder} className={extraInputClass ? `${styles.inputContainer__input} ${extraInputClass}` : `${styles.inputContainer__input}`}/>
            {iconName && <button type={iconButtonType} className={styles.inputContainer__button} onClick={onIconButtonClick}>{getIcon(iconName)}</button>}
        </label>
    );
};

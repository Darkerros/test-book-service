import React, {ChangeEventHandler, FC} from 'react';
import styles from "./select.module.scss";
import {IOption} from "./option-interface";

interface ISelectProps {
    onChange: ChangeEventHandler<HTMLSelectElement>;
    name: string;

    options: IOption[];

    title?: string;
}

export const Select:FC<ISelectProps> = ({onChange,options,name, title}) => {
    return (
        <div className={styles.selectContainer}>
            {title && <span className={styles.selectContainer__label}>{title}</span>}
            <select name={name} className={styles.selectContainer__select}  onChange={onChange}>
                {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
        </div>
    );
};

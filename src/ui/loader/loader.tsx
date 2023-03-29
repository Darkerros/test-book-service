import React, {FC} from 'react';
import styles from './loader.module.scss'
import {LoadIcon} from "../icons/load-icon";

interface ILoaderProps {
    extraClass?: string;
}

export const Loader:FC<ILoaderProps> = ({extraClass}) => {
    return (
        <LoadIcon className={extraClass ? `${styles.loader} ${extraClass}` : `${styles.loader}`}/>
    );
};

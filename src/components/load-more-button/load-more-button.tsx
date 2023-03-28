import {FC, MouseEventHandler} from 'react';
import styles from "./load-more-button.module.scss"
import {LoadIcon} from "../../ui/icons/load-icon";
import {DownArrowIcon} from "../../ui/icons/down-arrow-icon";


interface ILoadMoreButton {
    isLoading?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    extraClass?: string;
}

export const LoadMoreButton:FC<ILoadMoreButton> = ({onClick, isLoading, extraClass}) => {
    return (
        <button disabled={isLoading} onClick={onClick} className={extraClass ? `${styles.loadMoreBtn} ${extraClass}` : `${styles.loadMoreBtn}`}>
            Load More
            {isLoading ? <LoadIcon className={styles.loadMoreBtn__loadIcon}/> : <DownArrowIcon/>}
        </button>
    );
};

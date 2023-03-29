import styles from './fake-book-poster.module.scss'
import {FC} from "react";

interface IFakeBookProps {
    title: string;
}

export const FakeBookPoster:FC<IFakeBookProps> = ({title}) => {
    return (
        <div className={styles.fakeBookPoster}>
            <p className={styles.fakeBookPoster__title}>{title}</p>
        </div>
    );
};

import React, {FC} from 'react';
import styles from "./book-info-poster.module.scss";
import {FakeBookPoster} from "../../../../components/fake-book-poster/fake-book-poster";

interface IBookInfoPosterProps {
    title: string;
    imageUrl?: string;
}

export const BookInfoPoster:FC<IBookInfoPosterProps> = ({title, imageUrl}) => {
    return (
        <div className={styles.bookInfoPosterContainer}>
            {imageUrl
                ?
                <img className={styles.bookInfoPosterContainer__image} src={imageUrl} alt="Картинка к книги"/>
                :
                <FakeBookPoster title={title}/>
            }
        </div>
    );
};

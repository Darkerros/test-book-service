import React, {FC} from 'react';
import styles from './book-info-block.module.scss'
import {BookVolumeResource} from "../../../../types/resources/book-volume-resource";
import {BookInfoContainer} from "../book-info-container/book-info-container";
import {BookInfoPoster} from "../book-info-poster/book-info-poster";

interface IBookInfoBlockProps {
    bookInfo: BookVolumeResource;
}

export const BookInfoBlock:FC<IBookInfoBlockProps> = ({bookInfo}) => {

    return (
        <div className={styles.bookInfoBlock}>
            <BookInfoPoster title={bookInfo.volumeInfo.title} imageUrl={bookInfo.volumeInfo.imageLinks?.medium}/>
            <BookInfoContainer bookinfo={bookInfo}/>
        </div>
    );
};

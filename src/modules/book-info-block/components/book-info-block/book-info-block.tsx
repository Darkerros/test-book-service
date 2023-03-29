import React, {FC} from 'react';
import styles from './book-info-block.module.scss'
import {BookVolumeResource} from "../../../../types/resources/book-volume-resource";
import {BookInfoContainer} from "../book-info-container/book-info-container";
import {FakeBookPoster} from "../../../../components/fake-book-poster/fake-book-poster";

interface IBookInfoBlockProps {
    bookInfo: BookVolumeResource;
}

export const BookInfoBlock:FC<IBookInfoBlockProps> = ({bookInfo}) => {
    const isHaveImage = !!bookInfo.volumeInfo.imageLinks?.medium

    return (
        <div className={styles.bookInfoBlock}>
            <div className={styles.bookInfoBlock__imageContainer}>
                {isHaveImage
                    ?
                    <img className={styles.bookInfoBlock__imageContainerImage} src={bookInfo.volumeInfo.imageLinks.medium} alt="Картинка к книги"/>
                    :
                    <FakeBookPoster title={bookInfo.volumeInfo.title}/>
                }
            </div>
            <BookInfoContainer bookinfo={bookInfo}/>
        </div>
    );
};

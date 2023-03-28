import {FC} from 'react';
import styles from './book-card-list.module.scss'
import {BookVolumeResource} from "../../types/resources/book-volume-resource";
import {BookCard} from "../book-card/book-card";

interface IBookCardListProps {
    books: BookVolumeResource[];
}

export const BookCardList:FC<IBookCardListProps> = ({books}) => {
    return (
        <div className={styles.bookCardContainer}>
            {books.map(book => <BookCard key={book.id} bookInfo={book}/>)}
        </div>
    );
};

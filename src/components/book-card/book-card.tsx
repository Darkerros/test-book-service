import styles from './book-card.module.scss'
import {BookVolumeResource} from "../../types/resources/book-volume-resource";
import {FC, memo} from "react";

interface IBookCardProps {
    bookInfo: BookVolumeResource;
}

export const BookCard:FC<IBookCardProps> = memo(({bookInfo}) => {
    const isCategoriesNotNull = bookInfo.volumeInfo.categories && bookInfo.volumeInfo.categories.length
    const isAuthorsNotNull = bookInfo.volumeInfo.authors && bookInfo.volumeInfo.authors.length

    return (
        <div className={styles.bookCard}>
            <div className={styles.bookCard__posterContainer}>
                <img className={styles.bookCard__posterContainerPoster} src={bookInfo.volumeInfo.imageLinks.thumbnail} alt=""/>
            </div>
            {isCategoriesNotNull && <p className={styles.bookCard__category}>{bookInfo.volumeInfo.categories[0]}</p>}
            <p className={isCategoriesNotNull ? styles.bookCard__name : `${styles.bookCard__name} ${styles.bookCard__name_category_null}`}>{bookInfo.volumeInfo.title}</p>
            {isAuthorsNotNull && <p className={styles.bookCard__authors}>{bookInfo.volumeInfo.authors.join(", ")}</p>}
        </div>
    );
});

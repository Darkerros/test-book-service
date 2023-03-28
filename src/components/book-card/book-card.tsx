import styles from './book-card.module.scss'
import {BookVolumeResource} from "../../types/resources/book-volume-resource";
import {FC, memo} from "react";
import {BookIcon} from "../../ui/icons/book-icon";
import {Link} from "react-router-dom";

interface IBookCardProps {
    bookInfo: BookVolumeResource;
}

export const BookCard:FC<IBookCardProps> = memo(({bookInfo}) => {
    const isCategoriesNotNull = bookInfo.volumeInfo.categories && bookInfo.volumeInfo.categories.length
    const isAuthorsNotNull = bookInfo.volumeInfo.authors && bookInfo.volumeInfo.authors.length
    const isThumbnailsNull = !bookInfo.volumeInfo.imageLinks?.thumbnail
    console.log(bookInfo.volumeInfo.imageLinks)

    return (
        <div className={styles.bookCard}>
            <Link to={`/book/${bookInfo.id}`} className={styles.bookCard__link}>
                <div className={styles.bookCard__posterContainer}>
                    {isThumbnailsNull
                        ? <BookIcon className={styles.bookCard__posterContainerNoPosterIcon}/>
                        :
                        <img className={styles.bookCard__posterContainerPoster} src={bookInfo.volumeInfo.imageLinks.thumbnail} alt=""/>}
                </div>
            </Link>
            {isCategoriesNotNull && <p className={styles.bookCard__category}>{bookInfo.volumeInfo.categories[0]}</p>}
            <Link to={`/book/${bookInfo.id}`} className={styles.bookCard__link}>
                <p className={isCategoriesNotNull ? styles.bookCard__name : `${styles.bookCard__name} ${styles.bookCard__name_category_null}`}>{bookInfo.volumeInfo.title}</p>
            </Link>
            {isAuthorsNotNull && <p className={styles.bookCard__authors}>{bookInfo.volumeInfo.authors.join(", ")}</p>}
        </div>
    );
});

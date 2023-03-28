import {FC} from 'react';
import styles from "./book-info-container.module.scss"
import {BookVolumeResource} from "../../../../types/resources/book-volume-resource";

interface IBookInfoContainerProps {
    bookinfo: BookVolumeResource;
}

export const BookInfoContainer:FC<IBookInfoContainerProps> = ({bookinfo}) => {
    const isHaveCategories = !!bookinfo.volumeInfo?.categories
    const isHaveAuthors = !!bookinfo.volumeInfo?.authors
    const isHaveDescription = !!bookinfo.volumeInfo?.description

    return (
        <div className={styles.bookInfoContainer}>
            {isHaveCategories && <p className={styles.bookInfoContainer__categories}>{bookinfo.volumeInfo.categories.join(",  ")}</p>}
            <h2 className={styles.bookInfoContainer__title}>{bookinfo.volumeInfo.title}</h2>
            {isHaveAuthors && <p className={styles.bookInfoContainer__authors}>{bookinfo.volumeInfo.authors.join(", ")}</p>}
            {isHaveDescription && <div>
                <b>About:</b>
                <p dangerouslySetInnerHTML={{__html: bookinfo.volumeInfo.description}}></p>
            </div>}
        </div>
    );
};

import styles from './book-page.module.scss'
import {useNavigate, useParams} from "react-router-dom";
import {PrevArrowIcon} from "../../ui/icons/prev-arrow-icon";
import {useEffect} from "react";
import {useAppDispatch} from "../../hooks/use-app-dispatch";
import {getBookInfoByIdThunk} from "../../services/thunks/getBookInfoByIdThunk";
import {useAppSelector} from "../../hooks/use-app-selector";
import {BookInfoBlock} from "../../modules/book-info-block";
import {Loader} from "../../ui/loader/loader";
export const BookPage = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {isLoading, isError, bookInfo} = useAppSelector(state => state.bookInfoReducer)
    const {id} = useParams<{id: string}>()

    useEffect(() => {
        if (id) dispatch(getBookInfoByIdThunk(id))
        // eslint-disable-next-line
    },[id])

    const handlePrevPageClick = () => {
        navigate("/")
    }

    return (
        <section className={styles.bookPage}>
            <button className={styles.bookPage__backPrevButton} onClick={handlePrevPageClick}>
                <PrevArrowIcon/>
                BACK TO SEARCH
            </button>
            {isLoading && <Loader extraClass={styles.bookPage__loader}/>}
            {isError && <p className={styles.bookPage__error}>Sorry book info dont load</p>}
            {bookInfo && <BookInfoBlock bookInfo={bookInfo}/>}
        </section>
    );
};

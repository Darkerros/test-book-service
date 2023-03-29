import styles from './main-page.module.scss'
import {useAppSelector} from "../../hooks/use-app-selector";
import {BookCardList} from "../../components/book-card-list/book-card-list";
import {LoadMoreButton} from "../../components/load-more-button/load-more-button";
import {useCallback} from "react";
import {useAppDispatch} from "../../hooks/use-app-dispatch";
import {getNextSearchPageThunk} from "../../services/thunks/get-next-search-page-thunk";
import {Loader} from "../../ui/loader/loader";

export const MainPage = () => {
    const dispatch = useAppDispatch()
    const {isLoadingNextPage, isLoadingSearch, isSuccessSearch, items: books, total, isHaveNextPage} = useAppSelector(state => state.searchReducer)

    const handleNextSearchPage = useCallback(() => {
        dispatch(getNextSearchPageThunk())
        // eslint-disable-next-line
    },[])

    return (
        <section className={styles.mainPage}>
            {isSuccessSearch && <p className={styles.mainPage__foundCount}>Found books: {total}</p>}
            {isLoadingSearch && <Loader extraClass={styles.mainPage__loader}/>}
            <BookCardList books={books}/>
            {isHaveNextPage && <LoadMoreButton isLoading={isLoadingNextPage} extraClass={styles.mainPage__loadMoreBtn} onClick={handleNextSearchPage}/>}
        </section>
    );
};

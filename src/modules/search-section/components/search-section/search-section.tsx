import {FormEvent, useCallback} from 'react';
import styles from './search-section.module.scss'
import {SearchSectionForm} from "../search-section-form/search-section-form";
import {useAppDispatch} from "../../../../hooks/use-app-dispatch";
import {searchBookThunk} from "../../../../services/thunks/search-book-thunk";

export const SearchSection = () => {
    const dispatch = useAppDispatch()

    const onSubmit = useCallback((event: FormEvent) => {
        event.preventDefault()
        dispatch(searchBookThunk())
        // eslint-disable-next-line
    },[])

    return (
        <section className={styles.searchSection}>
            <div className={styles.searchSection__background}/>
            <h2 className={styles.searchSection__title}>Search Book</h2>
            <SearchSectionForm submitHandler={onSubmit}/>
        </section>
    );
};

import {FormEvent, useCallback} from 'react';
import styles from './search-section.module.scss'
import {SearchSectionForm} from "../search-section-form/search-section-form";
import {useAppDispatch} from "../../../../hooks/use-app-dispatch";
import {searchBookThunk} from "../../../../services/thunks/search-book-thunk";
import {useLocation, useNavigate} from "react-router-dom";

export const SearchSection = () => {
    const location = useLocation()
    const navigation = useNavigate()
    const dispatch = useAppDispatch()

    const onSubmit = useCallback((event: FormEvent) => {
        event.preventDefault()
        console.log(location)
        if (location.pathname !== "/") navigation(-1)

        dispatch(searchBookThunk())
        // eslint-disable-next-line
    },[location])

    return (
        <section className={styles.searchSection}>
            <div className={styles.searchSection__background}/>
            <h2 className={styles.searchSection__title}>Search Book</h2>
            <SearchSectionForm submitHandler={onSubmit}/>
        </section>
    );
};

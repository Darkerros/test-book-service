import {FC, FormEvent, useCallback} from 'react';
import styles from "./search-section-from.module.scss"
import {SearchSectionInput} from "../search-section-input/search-section-input";
import {FilterBlock} from "../search-filters-block/filter-block";


interface ISearchSectionFormProps {
    submitHandler: (event: FormEvent) => void
}

export const SearchSectionForm:FC<ISearchSectionFormProps> = ({submitHandler}) => {
    const onSubmit = useCallback((event: FormEvent) => {
        submitHandler(event)
    },[submitHandler])

    return (
        <form className={styles.searchSectionForm} onSubmit={onSubmit}>
            <SearchSectionInput/>
            <FilterBlock/>
        </form>
    );
};

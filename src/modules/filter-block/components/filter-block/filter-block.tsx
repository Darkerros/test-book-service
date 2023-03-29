import React, {ChangeEvent, FC, useCallback} from 'react';
import styles from './filter-block.module.scss'
import {BookCategory} from "../../../../types/book-category";
import {OrderBy} from "../../../../types/order-by";
import {useAppDispatch} from "../../../../hooks/use-app-dispatch";
import {searchReducerActions} from "../../../../services/reducers/search-reducer";
import {getBookCategoryByValue} from "../helpers/get-book-category-by-value";
import {getOrderByByValue} from "../helpers/get-order-by-by-value";

const categoryOptions = Object.keys(BookCategory).map((category) => ({value: category, label: category}))
const orderByOptions = Object.values(OrderBy).map((orderBy) => ({value: orderBy, label: orderBy}))

interface IFilterBlockProps {
    extraClass?: string;
}

export const FilterBlock:FC<IFilterBlockProps> = ({extraClass}) => {
    const dispatch = useAppDispatch()


    const handleChangeCategory = useCallback((event:ChangeEvent<HTMLSelectElement>) => {
        const category = getBookCategoryByValue(event.target.value)
        dispatch(searchReducerActions.changeCategoryFilter(category))
        // eslint-disable-next-line
    },[])
    const handleChangeOrderBy = useCallback((event:ChangeEvent<HTMLSelectElement>) => {
        const orderBy = getOrderByByValue(event.target.value)
        dispatch(searchReducerActions.changeOrderFilter(orderBy))
        // eslint-disable-next-line
    },[])

    return (
        <div className={extraClass ? `${styles.filtersContainer} ${extraClass}` : `${styles.filtersContainer}`}>
            <select name="category" className={styles.filtersContainer__select}  onChange={handleChangeCategory}>
                {categoryOptions.map(option => <option value={option.value}>{option.label}</option>)}
            </select>
            <select name="orderBy" className={styles.filtersContainer__select} onChange={handleChangeOrderBy}>
                {orderByOptions.map(option => <option value={option.value}>{option.label}</option>)}
            </select>
        </div>
    );
};



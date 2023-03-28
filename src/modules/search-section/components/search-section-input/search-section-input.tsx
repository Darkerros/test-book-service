import React, {ChangeEvent} from 'react';
import {Input} from "../../../../ui/input/input";
import {useAppSelector} from "../../../../hooks/use-app-selector";
import {useAppDispatch} from "../../../../hooks/use-app-dispatch";
import {searchReducerActions} from "../../../../services/reducers/search-reducer";

export const SearchSectionInput = () => {
    const dispatch = useAppDispatch()
    const searchQuery = useAppSelector(state => state.searchReducer.query)
    const onChange = (event:ChangeEvent<HTMLInputElement>) => {
        dispatch(searchReducerActions.changeQuery(event.target.value))
    }

    return (
        <Input value={searchQuery}
               onChange={onChange}
               iconName={"search"}
               placeholder={"Input text to found"}
               iconButtonType={"submit"}/>
    );
};

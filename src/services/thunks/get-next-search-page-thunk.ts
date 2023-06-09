import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {api} from "../../api/api";

export const getNextSearchPageThunk = createAsyncThunk(
    "getNextSearchPageThunk",
    (arg,{getState}) => {
        const {searchReducer: {query, category, orderBy, currentItemsOffset, requestItemsLimit}} = getState() as RootState
        return api.search(query, orderBy, category, requestItemsLimit, currentItemsOffset)
    }
)
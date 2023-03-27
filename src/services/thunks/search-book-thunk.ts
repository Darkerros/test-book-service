import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";
import {RootState} from "../store";

export const searchBookThunk = createAsyncThunk(
    "searchBookThunk",
    (arg,{getState}) => {
        const {searchReducer: {query, category, orderBy, currentItemsOffset,}} = getState() as RootState
        return api.search(query,orderBy,category,30,currentItemsOffset)
    }
)
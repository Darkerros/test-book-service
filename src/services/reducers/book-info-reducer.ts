import {createSlice} from "@reduxjs/toolkit";
import {BookVolumeResource} from "../../types/resources/book-volume-resource";
import {getBookInfoByIdThunk} from "../thunks/getBookInfoByIdThunk";

interface IInitialStateBookInfoReducer {
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;

    bookInfo: null | BookVolumeResource;
}


const initialState:IInitialStateBookInfoReducer = {
    isLoading: false,
    isError: false,
    isSuccess: false,

    bookInfo: null,
}


const bookInfoReducerSlice = createSlice({
    name: "bookInfoReducer",
    initialState: initialState,
    reducers: {
        resetInfo(state) {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.bookInfo = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBookInfoByIdThunk.pending, (state) => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
            state.bookInfo = null
        })
        builder.addCase(getBookInfoByIdThunk.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.bookInfo = action.payload
        })
        builder.addCase(getBookInfoByIdThunk.pending, (state) => {
            state.isLoading = false
            state.isError = true
        })
    }
})


export const bookInfoReducer = bookInfoReducerSlice.reducer;
export const bookInfoReducerActions = bookInfoReducerSlice.actions
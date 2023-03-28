import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {searchReducer} from "./reducers/search-reducer";
import {bookInfoReducer} from "./reducers/book-info-reducer";

export const store = configureStore({
    reducer: combineReducers({searchReducer, bookInfoReducer}),
    devTools: true,
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
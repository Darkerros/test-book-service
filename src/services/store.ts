import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {searchReducer} from "./reducers/search-reducer";


export const store = configureStore({
    reducer: combineReducers({searchReducer}),
    devTools: true,
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BookCategory} from "../../types/book-category";
import {OrderBy} from "../../types/order-by";
import {searchBookThunk} from "../thunks/search-book-thunk";
import {BookVolumeResource} from "../../types/resources/book-volume-resource";
import {getNextSearchPageThunk} from "../thunks/get-next-search-page-thunk";

interface IInitialState {
    category: BookCategory;
    orderBy: OrderBy;
    query: string;

    currentItemsOffset: number;

    itemsIncludeObject: {[key:string]: boolean}
    items: BookVolumeResource[];
    total: number | null;

    requestItemsLimit: number;

    isLoadingSearch: boolean;
    isSuccessSearch: boolean;
    isErrorSearch: boolean;

    isHaveNextPage: boolean;

    isLoadingNextPage: boolean;
    isSuccessNextPage: boolean;
    isErrorNextPage: boolean;
}

const initialState:IInitialState = {
    category: BookCategory.all,
    orderBy: OrderBy.relevance,
    query: "",

    itemsIncludeObject: {},
    currentItemsOffset: 0,
    requestItemsLimit: 30,
    items: [],
    total: null,


    isHaveNextPage: false,

    isLoadingSearch: false,
    isSuccessSearch: false,
    isErrorSearch: false,

    isLoadingNextPage: false,
    isSuccessNextPage: false,
    isErrorNextPage: false,
}

const searchReducerSlice = createSlice({
    name: "filterReducer",
    initialState: initialState,

    reducers: {
        changeCategoryFilter(state, action: PayloadAction<BookCategory>) {
            state.category = action.payload
        },
        changeOrderFilter(state, action:PayloadAction<OrderBy>) {
            state.orderBy = action.payload
        },
        changeQuery(state, action:PayloadAction<string>) {
            state.query = action.payload
        },
    },

    extraReducers: (builder) => {
        builder.addCase(searchBookThunk.pending,(state) => {
            state.isLoadingSearch = true
            state.isErrorSearch = false
            state.isSuccessSearch = false
            state.isHaveNextPage = false
            state.itemsIncludeObject = {}
            state.currentItemsOffset = 0
            state.total = null
            state.items = []
        })
        builder.addCase(searchBookThunk.fulfilled,(state, action) => {
            state.isLoadingSearch = false
            state.isSuccessSearch = true

            if (!action.payload.items ) {
                state.total = 0
                state.isHaveNextPage = false
                return state
            }

            state.total = action.payload.totalItems

            state.isHaveNextPage = true
            state.currentItemsOffset += state.requestItemsLimit
            state.items = action.payload.items
            state.itemsIncludeObject = action.payload.items.reduce((acc:IInitialState["itemsIncludeObject"],bookInfo) => ({...acc, [bookInfo.id]: true}),{})
        })
        builder.addCase(searchBookThunk.rejected,(state) => {
            state.isErrorSearch = true
            state.isLoadingSearch = false
        })

        builder.addCase(getNextSearchPageThunk.pending, (state) => {
            state.isLoadingNextPage = true
            state.isErrorNextPage = false
            state.isSuccessSearch = false
        })
        builder.addCase(getNextSearchPageThunk.fulfilled, (state, action) => {
            state.isLoadingNextPage = false
            state.isSuccessSearch = true

            if (!action.payload.items) {
                state.isHaveNextPage = false
                return state
            }

            state.total = action.payload.totalItems

            state.isHaveNextPage = true
            state.currentItemsOffset += state.requestItemsLimit

            const filteredSearchItems = action.payload.items.filter(bookInfo => !state.itemsIncludeObject[bookInfo.id])
            const itemsIncludeObjectToAdd = filteredSearchItems.reduce((acc:IInitialState["itemsIncludeObject"],bookInfo) => ({...acc, [bookInfo.id]: true}),{})
            state.items = [...state.items, ...filteredSearchItems]
            state.itemsIncludeObject = {...state.itemsIncludeObject, ...itemsIncludeObjectToAdd}
        })
        builder.addCase(getNextSearchPageThunk.rejected, (state) => {
            state.isHaveNextPage = false
            state.isErrorNextPage = true
            state.isSuccessNextPage = true
        })
    }
})


export const searchReducer = searchReducerSlice.reducer
export const searchReducerActions = searchReducerSlice.actions
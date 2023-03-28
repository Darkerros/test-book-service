import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";

export const getBookInfoByIdThunk = createAsyncThunk(
    "getBookInfoById",
    (id: string) => api.getBookInfo(id)
)
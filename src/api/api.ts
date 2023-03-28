import axios from "axios";
import {ApiEndpoint} from "../types/api-endpoint";
import {IApi} from "../types/api-interface";
import {BookCategory} from "../types/book-category";


const BASE_URL = "https://www.googleapis.com/books/v1/"
const API_KEY = "AIzaSyBGn7fYXzOyFpi2iY0l7KSq_g6WbjTKgU8"

const apiInstance = axios.create({
    baseURL: BASE_URL,
    params: {key: API_KEY}
})
const createReguest = (endpoint: ApiEndpoint | string, params?: any, limit?: number, offset?: number) => {
    if (limit && limit > 40)
        limit = 40

    return apiInstance.get(endpoint, {params: {...params, startIndex: offset ?? 0, maxResults: limit ?? 40}, }).then(data => data.data)
}

export const api:IApi = {
    search(query, orderBy, category, limit, offset) {
        if (category && category !== BookCategory.all) query += category
        return createReguest(ApiEndpoint.search,{q: query,orderBy},limit, offset)
    },

    getBookInfo(id) {
        return createReguest(`${ApiEndpoint.getById}/${id}`, {projection: "full"})
    }
}
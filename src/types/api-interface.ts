import {OrderBy} from "./order-by";
import {BookCategory} from "./book-category";
import {SearchResponse} from "./responses/search-response";
import {GetBookInfoResponse} from "./responses/get-book-info-response";

export interface IApi {
    search: (query: string, orderBy: OrderBy, category: BookCategory, limit?: number, offset?: number) => Promise<SearchResponse>,
    getBookInfo: (id: string) => Promise<GetBookInfoResponse>
}
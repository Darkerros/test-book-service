import {BookVolumeResource} from "../resources/book-volume-resource";

export interface SearchResponse {
    kind: "books#volumes",
    items?: BookVolumeResource[],
    totalItems: number
}
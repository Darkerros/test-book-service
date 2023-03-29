import {OrderBy} from "../../../../types/order-by";

export const getOrderByByValue = (value: string) => {
    switch (value) {
        case OrderBy.relevance:
            return OrderBy.relevance
        case OrderBy.newest:
            return OrderBy.newest
        default:
            return OrderBy.newest
    }
}
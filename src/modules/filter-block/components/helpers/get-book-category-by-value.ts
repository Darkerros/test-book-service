import {BookCategory} from "../../../../types/book-category";

export const getBookCategoryByValue = (value: string) => {
    switch (value) {
        case BookCategory.art:
            return BookCategory.art
        case BookCategory.biography:
            return BookCategory.biography
        case BookCategory.medical:
            return BookCategory.medical
        case BookCategory.history:
            return BookCategory.history
        case BookCategory.computers:
            return BookCategory.computers
        case BookCategory.poetry:
            return BookCategory.poetry
        default:
            return BookCategory.all
    }
}
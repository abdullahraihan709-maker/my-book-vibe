import { Dispatch, SetStateAction } from 'react';

export interface Book {
    bookId: number;
    bookName: string;
    author: string;
    image: string;
    review: string;
    totalPages: number;
    rating: number;
    category: string;
    tags: string[];
    publisher: string;
    yearOfPublishing: number;
}

export interface BooksContextType {
    readBooks: Book[];
    setReadBooks: Dispatch<SetStateAction<Book[]>>;
    wishlist: Book[];
    setWishlist: Dispatch<SetStateAction<Book[]>>;
}
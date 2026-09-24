'use client';
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';

const ListedBooks = () => {

    const {readBooks, wishlist} = useContext(BooksContext);
    console.log(readBooks, wishlist, "readBooks", "wishlist");

    return (
        <div>
            <h2>Listed books | Total Read books: {readBooks.length} <br /> | Total Wishlist books: {wishlist.length}  </h2>
        </div>
    );
};

export default ListedBooks;
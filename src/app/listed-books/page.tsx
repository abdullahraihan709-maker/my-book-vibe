'use client';
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';

const ListedBooks = () => {

    const {readBooks} = useContext(BooksContext);
    console.log(readBooks, "readBooks");

    return (
        <div>
            <h2>Listed books page is rendered</h2>
        </div>
    );
};

export default ListedBooks;
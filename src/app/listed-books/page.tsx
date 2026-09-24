'use client';
import BookCard from '@/components/shared/BookCard';
import ListedBooksCard from '@/components/shared/ListedBooksCard';
import { Book } from '@/components/types/bookDataTypes';
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';

const ListedBooks = () => {

    const {readBooks, wishlist} = useContext(BooksContext);
    console.log(readBooks, wishlist, "readBooks", "wishlist");

    return (
        <div className="container mx-auto py-15" >
            <h2 className="my-7 bg-[#23BE0A] rounded-3xl py-16 font-bold text-white text-4xl text-center" >listed Books</h2>


            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books (${readBooks.length})`} />

                <div className="tab-content bg-base-100 border-base-300 p-6">
                   
                    { readBooks.length > 0 ? (
                        readBooks.map((book: Book) => {
                            return <ListedBooksCard key={book.bookId} book={book} />
                        })
                     ) : (
                        <p className='text-center text-lg font-semibold' >No read books are found</p>
                     )
                    }

                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wishlist Books (${wishlist.length})`} defaultChecked />
                
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    
                    { wishlist.length > 0 ? (
                        wishlist.map((book: Book) => {
                            return <ListedBooksCard key={book.bookId} book={book} />
                        } )
                     ) : (
                        <p className='text-center text-lg font-semibold' >No wishlist books are found</p>
                     )
                    }

                </div>

            </div>

        </div>
    );
};

export default ListedBooks;
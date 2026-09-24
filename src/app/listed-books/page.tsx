'use client';
import BookCard from '@/components/shared/BookCard';
import ListedBooksCard from '@/components/shared/ListedBooksCard';
import { Book } from '@/components/types/bookDataTypes';
import { BooksContext } from '@/context/BooksContext';
import React, { useContext, useState } from 'react';

const ListedBooks = () => {

    const {readBooks, wishlist} = useContext(BooksContext);
    const [sortBy, setSortBy] = useState< "rating" | "pages" | "year" >("rating");

    console.log(readBooks, wishlist, "readBooks", "wishlist");


    const sortBooks = (books: Book[]) => {
        const sortedBooks = [...books];

        if(sortBy === "rating"){
            sortedBooks.sort((a, b) => b.rating - a.rating);
        } else if(sortBy === "pages"){
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        } else if(sortBy === "year"){
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }

        return sortedBooks;
    }



    const sortedReadBooks = sortBooks(readBooks); 
    const sortedWishlist = sortBooks(wishlist);


    return (
        <div className="container mx-auto py-15" >
            <h2 className="my-7 bg-[#23BE0A] rounded-3xl py-16 font-bold text-white text-4xl text-center" >listed Books</h2>

            <div className='text-center'>
                <select value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year" )} 
                    defaultValue="Pick a Runtime" 
                    className="select select-success"
                    >
                    <option disabled={true}>Sort By</option>
                    <option value={"rating"} >rating</option>
                    <option value={"pages"} >Number of Pages</option>
                    <option value={"year"} >Published Year</option>
                </select>
            </div>


            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books (${readBooks.length})`} />

                <div className="tab-content bg-base-100 border-base-300 p-6">
                   
                    { sortedReadBooks.length > 0 ? (
                        sortedReadBooks.map((book: Book) => {
                            return <ListedBooksCard key={book.bookId} book={book} />
                        })
                     ) : (
                        <p className='text-center text-lg font-semibold' >No read books are found</p>
                     )
                    }

                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wishlist Books (${wishlist.length})`} defaultChecked />
                
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    
                    { sortedWishlist.length > 0 ? (
                        sortedWishlist.map((book: Book) => {
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
'use client';

import { useContext } from "react";
import { Book } from "../types/bookDataTypes";
import Books from "../homepage/Books";
import { BooksContext } from "@/context/BooksContext";


const ReadButton = ({book}: {book: Book}) => {

    const {readBooks, setReadBooks} = useContext(BooksContext); 



    const handleReadBook = () => {
        console.log("Read book btn triggered", book);

        setReadBooks([...readBooks, book]);
        alert(`You have read "${book.bookName}"`)
    };

    return (
        <button onClick={() => handleReadBook() } className="btn btn-outline border-slate-300 hover:bg-[#23BE0A] hover:border-[#23BE0A] hover:text-white rounded-xl px-8 text-base font-semibold shadow-sm transition-all">
            Read
        </button>
    );
};

export default ReadButton;
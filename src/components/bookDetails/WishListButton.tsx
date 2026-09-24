'use client';

import { useContext } from "react";
import { Book } from "../types/bookDataTypes";

import { BooksContext } from "@/context/BooksContext";
import { toast } from "react-toastify";


const WishListButton = ({book}: {book: Book}) => {

    const {wishlist, setWishlist} = useContext(BooksContext); 



    const handleAddToWishlist = () => {
        console.log("Read book btn triggered", book);

        setWishlist([...wishlist, book]);
        toast.success(`You have read "${book.bookName}"`)
    };

    return (
        <button onClick={() => handleAddToWishlist() } className="btn bg-[#59C6D2] hover:bg-[#4bb1be] text-white border-none rounded-xl px-8 text-base font-semibold shadow-md hover:shadow-lg transition-all">
            Add to Wishlist
        </button>
    );
};

export default WishListButton;
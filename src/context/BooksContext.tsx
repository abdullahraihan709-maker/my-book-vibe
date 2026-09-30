'use client';

import { createContext, ReactNode, useState } from 'react';


import { Book, BooksContextType } from '@/components/types/bookDataTypes';

export const BooksContext = createContext<BooksContextType>({
    readBooks: [],
    setReadBooks: () => {},
    wishlist: [],
    setWishlist: () => {},
});


const BooksProvider = ({children}: {children: ReactNode} ) => {

    const [readBooks, setReadBooks] = useState<Book[]>([]);
    const [wishlist, setWishlist] = useState<Book[]>([]);

    const sharedData = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist,

    }

    return (
        <BooksContext.Provider value={sharedData}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;
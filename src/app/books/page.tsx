import BookCard from "@/components/shared/BookCard";
import {Book} from "@/components/types/bookDataTypes"

const getBooks = async (): Promise<Book[]> => {
    const response = await fetch("http://localhost:3000/booksData.json", {
        cache: "no-store", // Ensure fresh data on server render
    });
    const data = await response.json();
    return data;
};

const Books = async () => {
    const booksData = await getBooks();

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Section Heading */}
            <div className="text-center mb-12">
                <h2 className="font-bold text-4xl sm:text-5xl text-slate-900 tracking-tight">
                    Our Collections
                </h2>
                <p className="text-slate-500 text-base sm:text-lg mt-3 max-w-xl mx-auto">
                    Explore all of our handpicked collection of bestselling titles across fiction, fantasy, classics, and more.
                </p>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {booksData.map((book) => (
                    <BookCard key={book.bookId} book={book} />
                ))}
            </div>
        </section>
    );
};

export default Books;
import { Book } from "@/components/types/bookDataTypes";
import Image from "next/image";
import Link from "next/link";

interface TBookDetailsPage {
    params: Promise<{
        id: string;
    }>;
}

const getBooks = async (): Promise<Book[]> => {
    const response = await fetch("http://localhost:3000/booksData.json", {
        cache: "no-store",
    });
    const data = await response.json();
    return data;
};

const BookDetailsPage = async ({ params }: TBookDetailsPage) => {
    const { id } = await params;
    const bookData = await getBooks();
    const book = bookData.find((b: Book) => String(b.bookId) === String(id));

    {/* Fallback state if book ID is invalid or missing */}
    if (!book) {
        return (
            <div className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4">
                <h2 className="text-3xl font-bold text-slate-800">Book Not Found</h2>
                <p className="text-slate-500 mt-2">The book you are looking for does not exist or has been removed.</p>
                <Link href="/" className="mt-6 btn bg-[#23BE0A] text-white border-none rounded-xl px-6">
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Left Side: Book Image Container */}
                <div className="lg:col-span-5 bg-slate-100 rounded-3xl p-8 md:p-12 flex justify-center items-center border border-slate-200/80 shadow-sm min-h-105 lg:min-h-140">
                    <div className="relative w-56 sm:w-64 md:w-72 h-85 sm:h-100 md:h-110 drop-shadow-2xl">
                        <Image
                            src={book.image}
                            alt={book.bookName}
                            fill
                            priority
                            unoptimized
                            className="object-contain rounded-xl"
                        />
                    </div>
                </div>

                {/* Right Side: Book Details & Actions */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                    {/* Book Name & Author */}
                    <div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                            {book.bookName}
                        </h1>
                        <p className="text-slate-600 font-medium text-lg md:text-xl mt-3">
                            By : <span className="text-slate-800 font-semibold">{book.author}</span>
                        </p>
                    </div>

                    <div className="border-t border-slate-200" />

                    {/* Category */}
                    <div>
                        <span className="text-slate-600 font-semibold text-base">{book.category}</span>
                    </div>

                    <div className="border-t border-slate-200" />

                    {/* Review Section */}
                    <div>
                        <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                            <span className="font-bold text-slate-900">Review : </span>
                            {book.review}
                        </p>
                    </div>

                    {/* Tags List */}
                    <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-bold text-slate-900 text-base">Tag</span>
                        <div className="flex gap-2 flex-wrap">
                            {book.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-1.5 rounded-full bg-[#23BE0A]/10 text-[#23BE0A] text-sm font-semibold"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-slate-200" />

                    {/* Metadata Table */}
                    <div className="space-y-3 max-w-md text-slate-700 text-base">
                        <div className="grid grid-cols-2">
                            <span className="text-slate-500">Number of Pages:</span>
                            <span className="font-semibold text-slate-900">{book.totalPages}</span>
                        </div>
                        <div className="grid grid-cols-2">
                            <span className="text-slate-500">Publisher:</span>
                            <span className="font-semibold text-slate-900">{book.publisher}</span>
                        </div>
                        <div className="grid grid-cols-2">
                            <span className="text-slate-500">Year of Publishing:</span>
                            <span className="font-semibold text-slate-900">{book.yearOfPublishing}</span>
                        </div>
                        <div className="grid grid-cols-2 items-center">
                            <span className="text-slate-500">Rating:</span>
                            <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                                <span>{book.rating}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 fill-amber-400 text-amber-400 inline"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 pt-4">
                        <button className="btn btn-outline border-slate-300 hover:bg-[#23BE0A] hover:border-[#23BE0A] hover:text-white rounded-xl px-8 text-base font-semibold shadow-sm transition-all">
                            Read
                        </button>
                        <button className="btn bg-[#59C6D2] hover:bg-[#4bb1be] text-white border-none rounded-xl px-8 text-base font-semibold shadow-md hover:shadow-lg transition-all">
                            Wishlist
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BookDetailsPage;
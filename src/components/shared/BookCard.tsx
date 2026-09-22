import Image from "next/image";
import Link from "next/link";
import { Book } from "@/components/types/bookDataTypes";

interface BookCardProps {
    book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
    const { bookId, bookName, author, image, rating, category, tags } = book;

    return (
        <Link 
            href={`/books/${bookId}`}
            className="group bg-base-100 rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
        >
            <div>
                <div className="bg-slate-100 rounded-2xl p-6 flex justify-center items-center h-60 mb-6 group-hover:bg-slate-200/70 transition-colors">
                    <div className="relative w-36 h-44 drop-shadow-md group-hover:scale-105 transition-transform duration-300">
                        <Image
                            src={image}
                                alt={bookName}
                                fill
                                unoptimized // Loads directly in the browser
                                loading="eager"
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-contain rounded-md"
                        />
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 rounded-full bg-[#23BE0A]/10 text-[#23BE0A] text-xs font-semibold tracking-wide"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="font-bold text-xl text-slate-800 line-clamp-1 group-hover:text-[#23BE0A] transition-colors">
                    {bookName}
                </h3>
                <p className="text-slate-500 font-medium text-sm mt-1">
                    By : {author}
                </p>
            </div>

            <div>
                <div className="border-t border-dashed border-slate-200 my-4" />
                <div className="flex items-center justify-between text-slate-600 font-semibold text-sm">
                    <span>{category}</span>
                    <div className="flex items-center gap-1.5">
                        <span>{rating.toFixed(1)}</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 fill-amber-400 text-amber-400"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;